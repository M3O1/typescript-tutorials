
export class Calculator {
    add(a:number|null, b:number|null): number {
        if (a == null) {
            a = 0;
        }
        if (b == null) {
            b = 0;
        }
        return a + b;
    }
}