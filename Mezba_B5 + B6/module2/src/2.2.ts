{
    // Interface vs Type Alias in TypeScript:-
    // js ---> Object, array --> Object, Function --> Object

    // array + function => you can use type Alias
    // Object => you can use interface

    // use type alias and interface for object types
    // type alias
    type User1 = {
        name: string;
        age: number;
    };

    type UserWithRole1 = User1 & { role: string };

    const user1: UserWithRole1 = {
        name: 'John',
        age: 30,
        role: 'manager'
    };

    // object interface
    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user2: UserWithRole2 = {
        name: 'John',
        age: 30,
        role: 'manager'
    };

    // use type alias and interface for Array types
    // type alias
    type roll1 = number[];
    const rollNumber1: roll1 = [1, 2, 3, 5];

    // interface
    interface roll2 {
        [index: number]: number;
    }
    const rollNumber2: roll2 = [1, 3, 4, 5];

    // use type alias and interface for function types
    // type alias
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

    // interface
    interface Add2 {
        (num1: number, num2: number): number;
    }
    const add2: Add2 = (num1, num2) => num1 + num2;
}
