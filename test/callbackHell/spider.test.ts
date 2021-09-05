import {spider} from "../../src/callbackHell/spider";
import fs from "fs";
import path from 'path';

describe("Spider을 통한 블로그 글 다운로드 테스트", () => {
    const expectedPath = 'www.typescriptlang.org/download.html';

    afterAll(() => {
        if (fs.existsSync(expectedPath)) {
            fs.unlinkSync(expectedPath)
            fs.rmdirSync(path.dirname(expectedPath), {recursive: true});
        }
    })

    it("www.typescriptlang.org/download 글을 다운로드", (done) => {
        spider("https://www.typescriptlang.org/download", (err, filename, downloaded) => {
            expect(fs.existsSync(expectedPath)).toBeTruthy()
            done()
        })
    })

})
