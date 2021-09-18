import {StackCalculator} from "../../src/proxyPattern/stackCalculator";
import {createSafety} from "../../src/proxyPattern/SafeCalculator";

describe("SafeCalculator 테스트", () => {
    const sut = createSafety(new StackCalculator())
    afterEach(() => {
        sut.clear()
    })

    it("6/2= 3", () => {
        sut.putValue(6)
        sut.putValue(2)

        expect(sut.divide()).toBe(3)
    })


    it("10/0 => throw Exception", () => {
        sut.putValue(10)
        sut.putValue(0)

        expect(() => sut.divide()).toThrow(Error)
    })
})