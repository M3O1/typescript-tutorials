import {Calculator} from "./cal"


describe("test", () => {
    it("calculate 1 + 1", () => {
        let calculator = new Calculator();
        expect(calculator.add(1,1)).toBe(2)
    })

    it("calculate 1 + 2", () => {
        let calculator = new Calculator();
        expect(calculator.add(1,2)).toBe(3)
    })

    it("calculate 1 + 4", () => {
        let calculator = new Calculator();
        expect(calculator.add(1,4)).toBe(5)
    })

    it("calculate null + 4", () => {
        let calculator = new Calculator();
        expect(calculator.add(null,4)).toBe(4)
    })

    it("calculate 3 + null", () => {
        let calculator = new Calculator();
        expect(calculator.add(3,null)).toBe(3)
    })

    it("calculate 3 + null", () => {
        let calculator = new Calculator();
        expect(calculator.add(null,null)).toBe(0)
    })
})
