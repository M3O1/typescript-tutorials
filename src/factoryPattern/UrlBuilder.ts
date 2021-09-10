import {Url} from "./url";

export class UrlBuilder {

    private protocol: string
    private username: string
    private password: string
    private hostname: string
    private port?: number
    private pathname: string
    private search: string
    private hash: string

    constructor() {
        this.protocol = 'http';
        this.username = '';
        this.password = '';
        this.hostname = 'localhost';
        this.pathname = '';
        this.search = '';
        this.hash = '';
    }

    setProtocol(protocol: string) {
        this.protocol = protocol
        return this
    }

    setAuthentication(username: string, password: string) {
        this.username = username
        this.password = password
        return this
    }

    setHostname(hostname: string) {
        this.hostname = hostname
        return this
    }

    setPort(port: number) {
        this.port = port
        return this
    }

    setPathname(pathname: string) {
        this.pathname = pathname
        return this
    }

    setSearch(search: string) {
        this.search = search
        return this
    }

    build() {
        return new Url(
            this.protocol,
            this.username,
            this.password,
            this.hostname,
            this.port,
            this.pathname,
            this.search,
            this.hash
        )
    }
}