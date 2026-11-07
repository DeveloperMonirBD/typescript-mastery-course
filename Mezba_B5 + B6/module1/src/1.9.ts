{
    // Type Alias --> Object

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNu?: string;
        address: string;
    };

    const student1: Student = {
        name: 'Monirul',
        age: 23,
        gender: 'male',
        contactNu: '01700000000',
        address: 'Dhaka'
    };

    const student2: Student = {
        name: 'Shakib',
        age: 32,
        gender: 'male',
        address: 'ctg'
    };

    type UserName = string | number | boolean; // union type
    const userName: UserName = 'Monirul'; // string

    type Add = (num1: number, num2: number) => number; // function type
    const add: Add = (num1, num2) => num1 + num2;




    
}
