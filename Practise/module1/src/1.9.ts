{
    
    // Type alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address?: string;
    };

    // const student1: {
    //     name: string;
    //     age: number;
    //     gender: string;
    //     contactNo: string;
    //     address: string
    // } = {
    //     name: 'Monir',
    //     age: 30,
    //     gender: 'male',
    //     contactNo: '0174535565667',
    //     address: 'Jessore'
    // };

    // const student2: {
    //     name: string;
    //     age: number;
    //     gender: string;
    //     contactNo: string;
    //     address: string
    // } = {
    //     name: 'Mir',
    //     age: 40,
    //     gender: 'male',
    //     contactNo: '01656544545667',
    //     address: 'Khulna'
    // };


      const student1: Student = {
        name: 'Monir',
        age: 30,
        gender: 'male',
        contactNo: '0174535565667',
        address: 'Jessore'
    };

    const student2: Student = {
        name: 'Mir',
        age: 40,
        gender: 'male',
        contactNo: '01656544545667',
    }

    // type alias for function

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2
    add(2,5)
       































}