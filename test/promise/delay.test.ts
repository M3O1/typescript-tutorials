import {delay} from "../../src/promise/delay";

describe("name", () => {
    it("1초 후에 promise가 호출됩니다.", (done) => {
        let promise = delay(1000);
        promise.then(e => {
            console.log(`호출이 성공했습니다. ${e}ms`)
            done();
        })
        console.log(`마지막 문장이 호출되었습니다.`);
    })

    it("async await에 대한 구문 구조", async () => {
        let e = await delay(100);
        console.log(`호출이 성공했습니다. ${e}ms`)
        console.log(`마지막 문장이 호출되었습니다.`)
    })

    it("복수개의 promise에 대한 호출 테스트", async () => {
        let arrays = []
        for (let i = 0; i < 5; i++) {
            arrays.push(delay(100 * i))
        }
        const results = await Promise.all(arrays)
        console.log(results)
    })
})