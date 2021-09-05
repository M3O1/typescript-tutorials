import {urlToFilename} from "../../src/callbackHell/utils";

describe("URL을 파일이름으로 변경 수행", () => {
    it("호스트만 있는 경우에 대한 케이스", () => {
        const result = urlToFilename("https://localhost");

        expect(result).toBe("localhost.html");
    })

    it("호스트와 경로가 있는 경우에 대한 케이스", () => {
        const result = urlToFilename("https://localhost/abc/index");

        expect(result).toBe("localhost/abc/index.html")
    })

    it("호스트와 경로와 쿼리 파람이 있는 경우에 대한 케이스", () => {
        const result = urlToFilename("https://localhost/abc/index?query=1");

        expect(result).toBe("localhost/abc/index.html")
    })
})