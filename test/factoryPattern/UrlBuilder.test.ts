import {UrlBuilder} from "../../src/factoryPattern/UrlBuilder";

describe("name", () => {
    it("UrlBuilder에 대한 테스트.", () => {
        const url = new UrlBuilder()
            .setHostname("naver.com")
            .setAuthentication("user", "pass")
            .build()
        expect(url.toString()).toBe("http://user:pass@naver.com")
    })

    it("port을 지정했을때에 대한 UrlBuilder에 대한 테스트.", () => {
        const url = new UrlBuilder()
            .setHostname("naver.com")
            .setAuthentication("user", "pass")
            .setPort(8080)
            .build()
        expect(url.toString()).toBe("http://user:pass@naver.com:8080")
    })

    it("protocol을 지정했을떄에 대한 UrlBuilder에 대한 테스트.", () => {
        const url = new UrlBuilder()
            .setHostname("naver.com")
            .setAuthentication("user", "pass")
            .setProtocol("https")
            .build()
        expect(url.toString()).toBe("https://user:pass@naver.com")
    })
})