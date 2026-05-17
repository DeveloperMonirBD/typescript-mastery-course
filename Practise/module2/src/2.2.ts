{
    //* Interface vs Type alias

    // type alias - sokol premative + object ar khatrea "type alias" baboher kora hoi.
    type User1 = {
        name: string;
        age: number;
    };
    // premetive data types
    type rollNumber = number;

    // interface - object ar khatrea baboher kora hoi
    interface User2 {
        name: string;
        age: number;
    }

    const user1: User2 = {
        name: 'Monir',
        age: 100
    };

    // using intersection in the type alias type
    type UserWithRole1 = User1 & { role: string };
    

    // same process for Interface: just use "extends"
    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user3: UserWithRole1 = {
        name: 'Jisan',
        age: 12,
        role: 'guest'
    };

    const user4: UserWithRole2 = {
        name: 'Jisan',
        age: 12,
        role: 'guest'
    };
    console.log(user4);

    // javascript a - object-> object, array--> object, function--> object

    // using for array
    // using type alias
    type Roll1 = number[];
    const rollNumber1: Roll1 = [1, 2, 3];

    // using interface for "number"
    interface Roll2 {
        [index: number]: number;
    }
    const rollNumber2: Roll2 = [1, 2, 3];

    // using interface for "string"
    interface Flower {
        [index: number]: string;
    }
    const allFlower: Flower = ['Water-lily', 'Jesmin', 'Marigold'];

    // using for function
    // for type alias --> =>
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

    // for interface --> :
    interface Add2 {
        (num1: number, num2: number): number;
    }
    const add2: Add2 = (num1, num2) => num1 + num2;

    //**
    // *------- Akn amra konta kokhon baboher korbo-------*
    // ** Array + function ar khatrea amra type alias baboher korbo
    // ** Object ar khatre "interface" ba "type alias" baboher korte pare.
    // ** "type alias" k extend korte hole (intersection "&") operator baboher korte hobe.
    // ** interface k extend korte hole "extends" keyword baboher korte hobe.
    //  */

    //
}