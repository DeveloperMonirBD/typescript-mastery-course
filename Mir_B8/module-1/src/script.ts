// Types:
let myString: string = 'Programming Hero';
let myNumber: number = 23444;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 122n;

// ১. Implicit Return (সবচেয়ে ক্লিন ও সংক্ষিপ্ত উপায়)
const addTwo = (a: number, b: number): number => a + b;

addTwo(1, 4);

// ২. Explicit Function Type (টাইপ আলাদা করে রাখা)
type AddTwoFn = (a: number, b: number) => number;

const addTwo1: AddTwoFn = (a, b) => {
    return a + b;
};

addTwo1(1, 4);

// ৩. Rest Parameters সহ (দুইয়ের অধিক সংখ্যা যোগ করার জন্য)
const addNumbers = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

addNumbers(1, 3, 4, 10);

// ৪. Readonly Tuple দিয়ে Strict Immutability
type TwoNumbers = readonly [a: number, b: number];

const addTwo2 = ([a, b]: TwoNumbers) => a + b;

addTwo2([1, 4]);

// ৫. Currying Pattern (ফাংশনাল প্রোগ্রামিং টেকনিক)
const add = (a: number) => {
    return (b: number) => {
        return (c: number): number => {
            return a + b + c;
        };
    };
};

console.log(add(2)(3)(4));

// Arrow Function দিয়ে এক লাইনে লেখা যায়:
const add1 =
    (a: number) =>
    (b: number) =>
    (c: number): number =>
        a + b + c;

const addOne = add1(1)(2)(3);

// ৬. Array Type Declaration
const arr: string[] = ['Programming', 'Hero'];
const numArr: number[] = [1, 23, 4, 56];
const boolArr: Array<boolean> = [true, false, true];
const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];

// ৭. Optional , default and rest parameters
const concatName = (firstName: string, lastName?: string): string => {
    if (!lastName) {
        return firstName;
    }

    return firstName + ' ' + lastName;
};

console.log(concatName('Monir'));

// ৮. Void Function
const greetings = (greeting: string, fullName = 'Guest'): void => {
    console.log(`${greeting} + " " + ${fullName}`);
};
greetings('Hello', 'Monir');

// ৯. Object type, type alias and interface
type UserName = string;
type Address = {
    streetName: string;
    cityName: string;
    holdingNumber: number;
};

type TUser = {
    name: UserName;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
    address?: Address;
};

interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
    address?: Address;
}

const user: TUser = {
    name: 'Monir',
    age: 23,
    isActive: true,
    action: () => {},
    badges: ['Admin', 'Moderator'],
    address: {
        streetName: '123 Main st',
        cityName: 'Dhaka',
        holdingNumber: 123
    }
};

// ১০. Union Type
const addOrConcat = (a: number | string, b: number | string): number | string => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
};

addOrConcat(1, 2);

// ১১. Intersection Type
type Person = {
    name: string;
    age: number;
};

type Employee = {
    company: string;
    salary: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: 'Monir',
    age: 23,
    company: 'Programming Hero',
    salary: 50000
};

console.log(employee.age);

// ১২. Type Assertion
const inputElement = document.getElementById('username-input') as HTMLInputElement;
const employeeName = (employee as Person).name;
console.log(employeeName);

// ১৩. Generics
const getArray = <T>(items: T[]): T[] => {
    return new Array().concat(items);
};

getArray<number>([1, 2, 3, 4]);

// ১৪. keyof Operator
type PersonKeys = keyof Person; // "name" | "age"

const personKey: PersonKeys = 'name'; // Void

// ১৫. Conditional Types
type isString<T> = T extends string ? 'Yes' : 'No';
// T extends string কথাটির অর্থ হলো: "T টাইপটি কি string টাইপের মধ্যে পড়ে (বা string টাইপে অ্যাসাইন করা সম্ভব)?"

type Test2 = isString<string>; // yes
type Test1 = isString<number>; // No

// ১৬. Mapped Types
// Mapped Types হলো TypeScript-এর এমন একটি পাওয়ারফুল ফিচার, যার মাধ্যমে আপনি আগের তৈরি করা কোনো Type-এর ওপর ভিত্তি করে Loop চালিয়ে নতুন একটি Type তৈরি করতে পারেন।

type personProperties = {
    [key in keyof Person]: string; // name: string, age: string
};

// ১৭. Mapped Type + Template Literal (Form Validation Error State)
//প্রজেক্টে ইউজার ফর্মের ডাটা টাইপ থেকে সোজাসুজি Form Error State তৈরি করতে Mapped Type ব্যবহার করা হয়।

type UserRegisterForm = {
    name: string;
    age: number;
    email: string;
};

type FormErrors<T> = {
    [K in keyof T]?: string;
};

const registationErrors: FormErrors<UserRegisterForm> = {
    name: 'Name is required',
    // age: 25,
    email: 'Invalid email address'
};

// ১৮. Generics + API Response Handling
type ApiResponse<TData> = {
    success: boolean;
    message: string;
    data: TData;
    statusCode: number;
};

type UserProfile = {
    id: string;
    username: string;
};

type Product = {
    id: number;
    title: string;
    price: number;
}[];

const userResponse: ApiResponse<UserProfile> = {
    success: true,
    message: 'User fetched successfully',
    statusCode: 200,
    data: {
        id: 'usr_101',
        username: 'monir_dev'
    }
};

const productResponse: ApiResponse<Product> = {
    success: true,
    message: 'Product list fetched successfully',
    statusCode: 200,
    data: [
        { id: 1, title: 'Mechanical Keyboard', price: 4500 },
        { id: 2, title: 'Gaming Mouse', price: 2500 }
    ]
};

// ১৯. Conditional Types (API Payload Formatter)
// যদি isArray true হয়, তবে Type হবে T[], না হলে শুধু T
type DynamicPayload<T, IsArray extends boolean> = IsArray extends true ? T[] : T;

// উদাহরণ ১: সিঙ্গেল ইউজার
type SingleUserPayload = DynamicPayload<UserProfile, false>;

// উদাহরণ ২: একাধিক ইউজার
type MultiUserPayload = DynamicPayload<UserProfile, true>;

// ২০. Union, Type Guard & Discriminant Union (State Management)
// Redux বা React Context-এ async কাজ করার সময় (Loading, Success, Error) state সঠিকভাবে হ্যান্ডেল করার সেরা টেকনিক:

type FetchState<T> =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: string };
function renderUI(state: FetchState<UserProfile>) {
    switch (state.status) {
        case 'loading':
            return 'Loading spinner ...';
        case 'success':
            return `Welcome ${state.data.username}`;
        case 'error':
            return `Error: ${state.error}`;
        default:
            return 'No data available';
    }
}
