import {spider} from "../../src/callbackHell/spider";

describe("Spider을 활용한 다운로드 확인", () => {
    it("Spider을 통한 블로그 글 다운로드 테스트", (done) => {
        spider("https://joshtronic.com/2021/01/17/recursively-create-directories-with-nodejs", (err, filename, downloaded) => {
            done()
        })
    })
})
