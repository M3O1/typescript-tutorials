import {StackCalculator} from "../../src/proxyPattern/stackCalculator";


describe("StackCalculator 테스트", () => {
    const sut = new StackCalculator()
    afterEach(() => {
        sut.clear()
    })

    it("1+2 = 3", () => {
        sut.putValue(1)
        sut.putValue(2)

        expect(sut.add()).toBe(3)
    })

    it("(1+2) *5= 15", () => {
        sut.putValue(1)
        sut.putValue(2)
        sut.add()
        sut.putValue(5)
        sut.multiply()

        expect(sut.peekValue()).toBe(15)
    })

    it("(10+2)/3= 4", () => {
        sut.putValue(10)
        sut.putValue(2)
        sut.add()
        sut.putValue(3)
        sut.divide()

        expect(sut.peekValue()).toBe(4)
    })

    it("(10-2)*2= 16", () => {
        sut.putValue(10)
        sut.putValue(2)
        sut.add()
        sut.putValue(3)
        sut.divide()

        expect(sut.peekValue()).toBe(4)
    })

    it("10/0= infinty", () => {
        sut.putValue(10)
        sut.putValue(0)
        
        expect(sut.divide()).toBe(Infinity)
    })
})
