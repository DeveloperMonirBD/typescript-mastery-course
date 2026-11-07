// Basic Data Types

// string
let firstName: string = 'Monirul' 

// number
let rollNumber: number = 123 

// boolean
let isAdmin: boolean = true

// any
let d;
d = 123;
d = 'Monirul';
d = true;
d = [1, 2, 3, 4, 5];
d = ['Monirul', 'Sakib', 'Rafi'];
d = [1, 'Monirul', true];
d = [{ name: 'Monirul', age: 25 }, { name: 'Sakib', age: 30 }]
d = [1, 'Monirul', true, { name: 'Sakib', age: 30 }];
d = [1, 'Monirul', true, { name: 'Sakib', age: 30 }, [1, 2, 3]];      
d = [1, 'Monirul', true, { name: 'Sakib', age: 30 }, [1, 2, 3], function () { console.log('Hello') }];

let randomValu: any = 123

// array
let numbers: number[] = [1, 2, 3, 4, 5]
numbers.push(6) 

let names: string[] = ['Monirul', 'Sakib', 'Rafi']
names.push('Read')

// tuple --> array --> order --> type of values
let user: [number, number] = [1, 5]
let userTuple: [string, number] = ["Monirul", 123]
let ageName: [number, string, boolean] = [28, "Mr.X", true]
ageName[0] = 20

// enum 
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
let direction: Direction = Direction.Up
console.log(direction) // 1

// object
let userObject: object = {
    name: 'Monirul',
    age: 25
}   

// void 
function logMessage(message: string): void {
    console.log(message)
}
logMessage('Hello, World!'))

// function with return type
function addNumbers(a: number, b: number): number {
    return a + b
}
let sum: number = addNumbers(5, 10)

//null and udefined
let x: undefined = undefined
let y: null = null

// never 
function throwError(message: string): never {
    throw new Error(message)
}
throwError('This is an error message')
    