export class StackCalculator {
    private stack: number[]

    constructor() {
        this.stack = []
    }

    putValue(value: number): void {
        this.stack.push(value)
    }

    getValue(): number | undefined {
        return this.stack.pop();
    }

    peekValue(): number | undefined {
        return this.stack.at(-1)
    }

    clear() {
        this.stack = []
    }

    add() {
        const left = this.getValue() ?? this.throwException("left가 존재하지 않습니다.")
        const right = this.getValue() ?? this.throwException("right가 존재하지 않습니다.")
        const result = left + right
        this.putValue(result)
        return result
    }

    subtract() {
        const left = this.getValue() ?? this.throwException("left가 존재하지 않습니다.")
        const right = this.getValue() ?? this.throwException("right가 존재하지 않습니다.")
        const result = left - right
        this.putValue(result)
        return result
    }

    divide() {
        const divisor = this.getValue() ?? this.throwException("divisor가 존재하지 않습니다.")
        const dividend = this.getValue() ?? this.throwException("dividened가 존재하지 않습니다.");
        const result = dividend / divisor
        this.putValue(dividend / divisor)
        return result
    }

    multiply() {
        const multiplicand = this.getValue() ?? this.throwException("multiplicand가 존재하지 않습니다.")
        const multiplier = this.getValue() ?? this.throwException("multiplier가 존재하지 않습니다.")

        const result = multiplier * multiplicand
        this.putValue(result)
        return result
    }

    private throwException(errorMessage: string): never {
        throw new Error(errorMessage);
    }
}