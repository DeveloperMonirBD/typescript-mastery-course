{
    // generic type

    type GenericArray<T> = Array<T>;
    // type GenericArray<param> = Array<param>

    type GenericArray1 = Array<number>;
    // const rollNumbers: number[] = [3, 5, 7];
    // const rollNumbers: Array<number> = [3, 5, 7];
    // const rollNumbers: GenericArray1 = [3, 5, 7];
    const rollNumbers: GenericArray<number> = [3, 5, 7];

    type GenericArray2 = Array<string>;
    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z']
    // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']
    // const mentors: GenericArray2 = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    type GenericArray3 = Array<boolean>;
    // const boolArray : boolean[] = [true, false, true ]
    // const boolArray : Array<boolean> = [true, false, true ]
    // const boolArray: GenericArray3 = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: 'Jhankar Mahbub',
            age: 40
        },
        {
            name: 'Monir',
            age: 25
        }
    ];

    const add = (x: number, y: number) => x + y;
    add(30, 40);

    // Generic Tuple

    type GenericTuple<X, Y> = [X, Y];

    // const goodBoy: [string, string] = ['Mr. X', 'Mr. Y']
    const goodBoy: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

    const UserWithID: GenericTuple<number, { name: string; email: string }> = [1235343, { name: 'Monir', email: 'monir@gmail.com' }];

    // interface

    // type User = {
    //     name: string;
    //     age: number
    // }

    interface User {
        name: string;
        age: number;
    }

    const user1: GenericArray<User> = [
        {
            name: 'Jhankar Mahbub',
            age: 40
        },
        {
            name: 'Monir',
            age: 25
        }
    ];

    //
}
