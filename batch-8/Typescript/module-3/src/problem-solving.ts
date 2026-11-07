//* problem 1:-

function formatUser(name: string, age: number, email?: string): string {
    if (email) {
        return `${name} is ${age} years old. Contact: ${email}`;
    }
    return `${name} is ${age} years old.`;
}

console.log(formatUser('Monir', 22, 'monir@example.com'));
console.log(formatUser('Rahim', 25));

//* Problem 2: Union Types & Type Narrowing

function formatInput(val: string | number): string {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val.toFixed(2);
}

console.log(formatInput('typescript'));
console.log(formatInput(12.32344));

//* Problem 3: Array Filtering with Object Interfaces
interface Task {
    title: string;
    completed: boolean;
    priority: 'Low' | 'medium' | 'high';
}

function filterPendingHighPriorityTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => !task.completed && task.priority === 'high');
}
const taskList: Task[] = [
    { title: 'Bug Fix', completed: false, priority: 'high' },
    { title: 'Write Docs', completed: true, priority: 'high' },
    { title: 'Refactor Code', completed: false, priority: 'Low' }
];

console.log(filterPendingHighPriorityTasks(taskList));

//* Problem 4: Generic Array Identity

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirstElement<number>([10, 20, 30]));
console.log(getFirstElement<string>(['a', 'b', 'c']));

//* Problem 5: Generic Pair Creator

function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const pair = createPair('User Id', 101);
console.log(pair);

//* Problem 6: OOP Encapsulation (Private Properties & Getters)
class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) this._balance += amount;
    }

    public withdraw(amount: number): boolean {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return true;
        }
        return false;
    }

    public get balance(): number {
        return this._balance;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(100);
// myAccount.withdraw(100);
console.log(myAccount.balance);

//* Problem 7: OOP Inheritance & Polymorphism
abstract class Shape {
    abstract getArea(): number;
}

class Rectangle extends Shape {
    constructor(
        private width: number,
        private height: number
    ) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

const rec = new Rectangle(5, 10);
console.log(rec.getArea());

//* Problem 8: Discriminated Unions

//* Discriminated Unions: Define a discriminated union type for HTTP state responses(SuccessState, ErrorState, LoadingState) and a function that handles each state using a switch statement.
//? যখন একাধিক অবজেক্ট টাইপের মধ্যে একটা সাধারণ প্রপার্টি (যেমন এখানে status) থাকে, যা দেখে টাইপস্ক্রিপ্ট আলাদা করতে পারে কোনটা কোন টাইপ, সেটাকেই Discriminated Union বলে।

type SuccessState = { status: 'success'; data: string[] };
type ErrorState = { status: 'error'; message: string };
type LoadingState = { status: 'loading' };

type NetworkState = SuccessState | ErrorState | LoadingState;

function handleResponse(state: NetworkState): string {
    switch (state.status) {
        case 'loading':
            return 'Loading...';
        case 'success':
            return `Loaded ${state.data.length} items.`;
        case 'error':
            return `Error: ${state.message}`;
    }
}

console.log(handleResponse({ status: 'success', data: ['Post 1', 'Post 2'] }));

//* Problem 9: Custom Type Guard
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function processUnknown(value: unknown): number {
    if (isString(value)) {
        return value.length;
    }

    return 0;
}

console.log(processUnknown('Typescript'));

//* Problem 10: String Enums
enum Role {
    Admin = 'ADMIN',
    Editor = 'EDITOR',
    Viewer = 'VIEWER'
}

function canEditContent(role: Role): boolean {
    return role === Role.Admin || role === Role.Editor;
}

console.log(canEditContent(Role.Editor));

//* Problem 11: Keyof & Lookup Types
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { id: 1, name: 'Monir', role: 'Developer' };

const userName = getProperty(user, 'name');
console.log(userName);

//* Problem 12: Utility Types - Partial & Pick

interface UserProfile {
    id: number;
    name: string;
    email: string;
    age: number;
}

function updateProfile(id: number, updates: Partial<Omit<UserProfile, 'id'>>): string {
    return `Update user ${id} with keys: ${Object.keys(updates).join(', ')}`;
}

console.log(updateProfile(1, { age: 23, email: 'new@example.com' }));

//* Problem 13: Utility Types - Record

type UserRoleCache = Record<number, 'Admin' | 'Member' | 'Guest'>;

const userRoles: UserRoleCache = {
    101: 'Admin',
    102: 'Member',
    103: 'Guest'
};

console.log(userRoles[101]);

//* ----------------
type Environment = 'development' | 'staging' | 'production';

const apiUrls: Record<Environment, string> = {
    development: 'http://localhost:3000',
    staging: 'https://staging.api.com',
    production: 'https://api.com'
};

//* Problem 14: Intersection Types

interface HasName {
    firstName: string;
    lastName: string;
}

interface HasContactInfo {
    email: string;
    phone: string;
}

type Employee = HasName & HasContactInfo;

const newEmployee: Employee = {
    firstName: 'Monir',
    lastName: 'Hossain',
    email: 'monir@dev.com',
    phone: '038757458'
};

console.log(newEmployee); 

//* Problem 15: Readonly Arrays & Properties
function sumImmutableArray(numbers: ReadonlyArray<number>): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const nums: readonly number[] = [10, 20, 30];
console.log(sumImmutableArray(nums));

//* Problem 16: Index Signatures
interface StringDictionary {
    [key: string]: string;
}

const envVariables: StringDictionary = {
    PORT: '5000',
    NORE_ENV: 'production',
    DB_URL: 'mongodb://localhost:27017'
};

console.log(envVariables['PORT']);

//* Problem 17: Async/Await with Strongly Typed API Promises
