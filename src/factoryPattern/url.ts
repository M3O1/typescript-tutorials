export class Url {

    private readonly protocol: string
    private readonly username: string
    private readonly password: string
    private readonly hostname: string
    private readonly port?: number
    private readonly pathname: string
    private readonly search: string
    private readonly hash: string

    constructor(protocol: string, username: string, password: string, hostname: string, port: number | undefined, pathname: string, search: string, hash: string) {
        this.protocol = protocol;
        this.username = username;
        this.password = password;
        this.hostname = hostname;
        this.port = port;
        this.pathname = pathname;
        this.search = search;
        this.hash = hash;

        this.validate()
    }

    validate() {
        if (!this.protocol || !this.hostname) {
            throw new Error("Must specify at least a protocol and a hostname")
        }
    }

    toString(): string {
        let url = ''
        url += `${this.protocol}://`
        if (this.username && this.password) {
            url += `${this.username}:${this.password}@`
        }
        url += this.hostname

        if (this.port) {
            url += `:${this.port}`
        }

        if (this.pathname) {
            url += this.pathname
        }
        if (this.search) {
            url += `?${this.search}`
        }

        if (this.hash) {
            url += `#${this.hash}`
        }
        return url
    }
}