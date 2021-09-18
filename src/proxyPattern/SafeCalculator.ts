import {StackCalculator} from "./stackCalculator";

export function createSafety(stackCalculator: StackCalculator) {
    return new Proxy(stackCalculator, {
        get: (target, key) => {
            if (key === 'divide') {
                return function () {
                    const divisor = target.peekValue()
                    if (divisor === 0) {
                        throw Error("Division by 0")
                    }
                    return target.divide()
                }
            }
            return Reflect.get(target, key)
        }
    })
}