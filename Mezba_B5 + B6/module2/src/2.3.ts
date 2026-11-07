{
    // generic type

    type GenericArray = Array<number | string | boolean>; // generic

    type GenericArray2<T> = Array<T>; // generic with parameter. (T => param)

    // const rollNumbers: number[] = [3, 4, 5, 6]
    // const rollNumbers: Array<number> = [3, 4, 5, 6]
    const rollNumbers: GenericArray = [3, 4, 5, 6];
    const rollNumbers2: GenericArray2<number> = [4, 5, 6, 7];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z']
    // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']
    const mentors: GenericArray = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors2: GenericArray2<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const boolArray : boolean[] = [true, false, true]
    // const boolArray : Array<boolean> = [true, false, true]
    const boolArray: GenericArray = [true, false, true];
    const boolArray2: GenericArray2<boolean> = [false, true, false];

    // Generic with Array of object type

    type GenericArray3<T> = Array<T>;

    const user: GenericArray3<{ name: string; age: number }> = [
        {
            name: 'John',
            age: 32
        },
        {
            name: 'Jane',
            age: 28
        },
        {
            name: 'Doe',
            age: 25
        }
    ];

    // Generic with Tuple type
    type GenericTuple<X, Y> = [X, Y];
    const man: GenericTuple<string, string> = ['John', 'Doe'];
    const UserWithID: GenericTuple<number, { name: string; email: string }> = [154643, { name: 'John', email: 'john@gmail.com' }];

    //
}
