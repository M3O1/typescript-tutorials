import {FindRegex} from "../../src/eventEmitter/findRegex";
import {assert, spy} from "sinon";

describe("name", () => {
    it("FILE이 있는 경우, FILEREAD는 한번 발생한다.", (done) => {
        let emitter = new FindRegex(/abc+/g)
        let x = spy()

        emitter
            .addFile("./test/data/1.txt")
            .find()
            .on(emitter.EVENT.FILEREAD, x)

        setTimeout(() => {
            assert.calledOnce(x);
            done()
        }, 100);
    })

    it("FILE의 경로가 잘못된 경우, ERROR를 반환한다.", (done) => {
        let emitter = new FindRegex(/abc/g)
        let x = spy()

        emitter
            .addFile("./test/data/2.txt")
            .find()
            .on(emitter.EVENT.ERROR, x)

        setTimeout(() => {
            assert.calledOnce(x);
            done()
        }, 100);
    })

    it("abc 패턴이 있는 라인 횟수에 따라, 콜백이 호출된다.", (done) => {
        let emitter = new FindRegex(/abc/g)
        let x = spy()

        emitter
            .addFile("./test/data/1.txt")
            .find()
            .on(emitter.EVENT.FOUND, x)

        setTimeout(() => {
            assert.callCount(x, 2);
            done()
        }, 100);
    })
})