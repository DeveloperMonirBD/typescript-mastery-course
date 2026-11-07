// //?  Examples of different types:

// import { greetings } from './v1-module-config';
// /*
// Top Types - any, unknown
// core types - string, number
// unit types - void
// nullish type - null
// literal types - "pending", "admin"
// unit sub-type - undefine
// bottom type - never
// */

// //* Top types
// let helloWorld: any = 'Hello World';
// helloWorld = 123;

// helloWorld.length;

// const something: unknown = 'Hello world';
// // something.length;

// //* Core types
// let something2: unknown;
// const num: number = 123;
// something2 = num;

// //* Nullish types

// interface User {
//     name: string;
// }

// type LoggedInUser = User | null;
// const currentUser: LoggedInUser = null;

// //* unit types

// const greet = () => {
//     console.log('Hello World');
// };

// something2 = greet();

// //* Sub-type of unit types

// const anotherGreet = (): undefined => {
//     console.log('Hello World');
//     return undefined;
// };

// const greetings: void = anotherGreet();
// console.log(greetings);

// //* Button types
// const getError = (msg: string): never => {
//     throw new Error(msg);
// };

// const X: number = getError('ABC');

//--------------------------// -------------------// ---------------------

//? 1️⃣ Top Types

//* A.any;
// any টাইপে যে কোনো Value রাখা যায়
let helloWorld: any = 'Hello World';
helloWorld = 123;
helloWorld = true;

// Type Check ছাড়া সরাসরি Property Access করা যায়
console.log(helloWorld.length);

//* B.unknown;
// unknown-এও যে কোনো Value রাখা যায়
let something: unknown = 'Hello World';
something = 123;
something = true;

// সরাসরি Property Access করতে দেয় না (Compile Error)
// console.log(something.length);

// আগে Type Check করে নিশ্চিত হতে হয়
if (typeof something === 'string') {
    console.log(something.length); // Safe!
}

//? 2️⃣ Core Types (Primitive Types)

const name: string = 'Monir'; // Text/String
const age: number = 25; // Number
const isDeveloper: boolean = true; // Boolean (true/false)
const bigNumber: bigint = 123456789n; // BigInt
const uniqueId: symbol = Symbol('id'); // Unique Identifier

//? 3️⃣ Nullish Types

interface User {
    name: string;
}

// User Object হতে পারে অথবা null হতে পারে
type LoggedInUser = User | null;
const currentUser: LoggedInUser = null;

let userName: string | undefined = undefined;

//? 4️⃣ Literal Types

// String Literal Type
type Status = 'pending' | 'success' | 'failed';
let orderStatus: Status = 'pending';

// Number Literal Type
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
let dice: DiceValue = 5;

// Boolean Literal Type
type IsActive = true;
const active: IsActive = true;

//? 5️⃣ Void Type

const greet = (): void => {
    console.log('Hello World');
};

greet();

//? 6️⃣ Undefined Type (Unit Type)

const anotherGreet = (): undefined => {
    console.log('Hello World');
    return undefined; // স্পষ্টভাবে undefined রিটার্ন করতে হবে
};

const greetings: undefined = anotherGreet();
console.log(greetings);

//? 7️⃣ Never Type (Bottom Type)

//* Example 1: Throwing an Error
const getError = (msg: string): never => {
    throw new Error(msg);
};

// never টাইপ সব টাইপের Subtype, তাই এটি অন্য টাইপে assign করা যায়
const result: number = getError('Something went wrong');

//* Example 2: Infinite Loop
const infiniteLoop = (): never => {
    while (true) {
        console.log('Running...');
    }
};
