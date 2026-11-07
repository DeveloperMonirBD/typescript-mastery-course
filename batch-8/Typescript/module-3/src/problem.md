20 TypeScript Practice Problems & Solutions:

Problem 1: Basic Typing & Optional Parameters

Description: Create a function formatUser that takes a name (string), age (number), and an optional email (string). Return a formatted greeting string.

function formatUser(name: string, age: number, email?: string): string {
  if (email) {
    return `${name} is ${age} years old. Contact: ${email}`;
  }
  return `${name} is ${age} years old.`;
}

// Test
console.log(formatUser("Monir", 22, "monir@example.com"));
console.log(formatUser("Rahim", 25));

Problem 2: Union Types & Type Narrowing

Description: Create a function formatInput that accepts string | number. If it's a string, return its uppercase version; if it's a number, return it rounded to 2 decimal places as a string.

function formatInput(val: string | number): string {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val.toFixed(2);
}

// Test
console.log(formatInput("typescript")); // "TYPESCRIPT"
console.log(formatInput(12.3456));      // "12.35"

Problem 3: Array Filtering with Object Interfaces

Description: Define an interface Task with title, completed (boolean), and priority ('low' | 'medium' | 'high'). Create a function that filters tasks by completion status and minimum priority level.

interface Task {
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

function filterPendingHighPriorityTasks(tasks: Task[]): Task[] {
  return tasks.filter(task => !task.completed && task.priority === "high");
}

// Test
const taskList: Task[] = [
  { title: "Bug Fix", completed: false, priority: "high" },
  { title: "Write Docs", completed: true, priority: "high" },
  { title: "Refactor Code", completed: false, priority: "low" }
];

console.log(filterPendingHighPriorityTasks(taskList));


Problem 4: Generic Array Identity

Description: Write a generic function getFirstElement that accepts an array of any type T and returns the first element or undefined if empty.

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Test
console.log(getFirstElement<number>([10, 20, 30])); // 10
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"

Problem 5: Generic Pair Creator

Description: Create a generic function createPair that takes two parameters of types T and U and returns a tuple [T, U].

function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Test
const pair = createPair("User ID", 101); // type: [string, number]
console.log(pair);

Problem 6: OOP Encapsulation (Private Properties & Getters)

Description: Create a class BankAccount with a private balance property. Include methods to deposit, withdraw, and a getter for balance.

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

// Test
const myAccount = new BankAccount(100);
myAccount.deposit(50);
console.log(myAccount.balance); // 150

Problem 7: OOP Inheritance & Polymorphism

Description: Create a base class Shape with a method getArea(): number. Create a subclass Rectangle that overrides getArea().

abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

// Test
const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // 50

Problem 8: Discriminated Unions

Description: Define a discriminated union type for HTTP state responses (SuccessState, ErrorState, LoadingState) and a function that handles each state using a switch statement.

type SuccessState = { status: "success"; data: string[] };
type ErrorState = { status: "error"; message: string };
type LoadingState = { status: "loading" };

type NetworkState = SuccessState | ErrorState | LoadingState;

function handleResponse(state: NetworkState): string {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return `Loaded ${state.data.length} items.`;
    case "error":
      return `Error: ${state.message}`;
  }
}

// Test
console.log(handleResponse({ status: "success", data: ["Post 1", "Post 2"] }));

Problem 9: Custom Type Guard

Description: Write a custom type guard function isString that verifies whether an unknown value is a string.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processUnknown(value: unknown): number {
  if (isString(value)) {
    return value.length;
  }
  return 0;
}

// Test
console.log(processUnknown("TypeScript")); // 10
console.log(processUnknown(12345));        // 0

Problem 10: String Enums

Description: Define a String Enum Role containing Admin, Editor, and Viewer. Write a function checking if a user has edit permissions.

enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

function canEditContent(role: Role): boolean {
  return role === Role.Admin || role === Role.Editor;
}

// Test
console.log(canEditContent(Role.Editor)); // true
console.log(canEditContent(Role.Viewer)); // false

Problem 11: Keyof & Lookup Types

Description: Create a function getProperty that takes an object and a key, ensuring type safety using the keyof operator.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Test
const user = { id: 1, name: "Monir", role: "Developer" };

const userName = getProperty(user, "name"); // Return type is string
console.log(userName);

Problem 12: Utility Types - Partial & Pick

Description: Define an interface UserProfile. Create a function updateProfile that accepts an ID and a partial profile object.

interface UserProfile {
  id: number;
  name: string;
  email: string;
  age: number;
}

function updateProfile(id: number, updates: Partial<Omit<UserProfile, "id">>): string {
  return `Updated user ${id} with keys: ${Object.keys(updates).join(", ")}`;
}

// Test
console.log(updateProfile(1, { age: 23, email: "new@example.com" }));

Problem 13: Utility Types - Record

Description: Use the Record utility type to define a cache structure mapping user IDs (numbers) to user roles (strings).

type UserRoleCache = Record<number, "Admin" | "Member" | "Guest">;

const userRoles: UserRoleCache = {
  101: "Admin",
  102: "Member",
  103: "Guest"
};

console.log(userRoles[101]);

Problem 14: Intersection Types

Description: Combine two interfaces HasName and HasContactInfo into a single type Employee using an intersection type (&).

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
  firstName: "Monir",
  lastName: "Hossain",
  email: "monir@dev.com",
  phone: "123-456-7890"
};

console.log(newEmployee);

Problem 15: Readonly Arrays & Properties

Description: Create a function sumImmutableArray that takes a ReadonlyArray<number> and returns the total sum without modifying the input array.

function sumImmutableArray(numbers: ReadonlyArray<number>): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Test
const nums: readonly number[] = [10, 20, 30];
console.log(sumImmutableArray(nums)); // 60

Problem 16: Index Signatures

Description: Create an interface StringDictionary that uses an index signature to store key-value pairs where both keys and values are strings.

interface StringDictionary {
  [key: string]: string;
}

const envVariables: StringDictionary = {
  PORT: "5000",
  NODE_ENV: "production",
  DB_URI: "mongodb://localhost:27017"
};

console.log(envVariables["PORT"]);

Problem 17: Async/Await with Strongly Typed API Promises

Description: Create an async function fetchData that simulates fetching data and returns a Promise<T>.

interface ApiResponse<T> {
  data: T;
  status: number;
}

async function fetchData<T>(data: T): Promise<ApiResponse<T>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data, status: 200 });
    }, 500);
  });
}

// Test
async function run() {
  const result = await fetchData<{ id: number; title: string }>({ id: 1, title: "Post One" });
  console.log(result.data.title);
}
run();

Problem 18: Function Overloading

Description: Implement function overloading for combine which concatenates strings if both arguments are strings, or adds numbers if both are numbers.

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

// Test
console.log(combine("Hello, ", "TypeScript")); // "Hello, TypeScript"
console.log(combine(15, 30));                  // 45

Problem 19: Tuple Type Manipulation

Description: Define a tuple type representing a 3D coordinate point [x, y, z] and write a function to calculate distance from origin $(0, 0, 0)$.

type Point3D = [x: number, y: number, z: number];

function getDistanceFromOrigin(point: Point3D): number {
  const [x, y, z] = point;
  return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
}

// Test
console.log(getDistanceFromOrigin([3, 4, 12])); // 13

Problem 20: Mapped Types

Description: Create a custom mapped type Nullable<T> that makes all properties of an interface nullable (null).

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface UserConfig {
  theme: string;
  notifications: boolean;
}

type FlexibleConfig = Nullable<UserConfig>;

const currentConfig: FlexibleConfig = {
  theme: "dark",
  notifications: null // valid
};

console.log(currentConfig);





