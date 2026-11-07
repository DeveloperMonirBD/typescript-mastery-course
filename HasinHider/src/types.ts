function divide(a: number, b: number): number {
    if (b == 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

function voidFun(a: number, b: number): void {
    if (b == 0) {
        throw new Error('Division by zero is not allowed');
    }
    // return a / b
}

console.log(divide(6, 2));
console.log(divide(30, 3));

const result = divide(32, 2);
console.log(result.toFixed(2));

const country = 'Bangladesh';
const n: number = 16;
const articleStatus: boolean = true;

let x;
console.log(typeof x);
