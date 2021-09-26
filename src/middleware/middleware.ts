import {Socket as zmqSocket} from 'zeromq';

type InboundFunc = (message: any) => any;
type OutboundFunc = (message: any) => any;
type MiddleWareFunc = InboundFunc | OutboundFunc;

interface Middleware {
    inbound?: InboundFunc;
    outbound?: OutboundFunc;
}


export class ZmqMiddlewareManager {
    private readonly socket: zmqSocket;
    private inboundMiddleware: InboundFunc[];
    private outboundMiddleware: OutboundFunc[];

    constructor(socket: zmqSocket) {
        this.socket = socket;
        this.inboundMiddleware = []
        this.outboundMiddleware = []

        this.handleIncomingMessages()
            .catch(err => console.error(err))
    }

    async handleIncomingMessages() {
        this.socket.on("message", (message: string) => {
            this.executeMiddleware(this.inboundMiddleware, message)
                .catch(err => {
                    console.error("error while processing thie message", err);
                })
        })
    }

    async send(message: any) {
        const finalMessage = await this.executeMiddleware(this.outboundMiddleware, message)
        return this.socket.send(finalMessage)
    }

    use(middleware: Middleware): void {
        if (middleware.inbound) {
            this.inboundMiddleware.push(middleware.inbound)
        }
        if (middleware.outbound) {
            this.outboundMiddleware.push(middleware.outbound)
        }
    }

    async executeMiddleware(middlewares: MiddleWareFunc[], initialMessage: string) {
        let message = initialMessage
        for await (const middlewareFunc of middlewares) {
            message = await middlewareFunc.call(this, message)
        }
        return message
    }
}