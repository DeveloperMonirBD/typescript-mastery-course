{

    // Reference Type --> Object

    const user: {
        companyName: 'Programming Hero'; // string literal type
        readonly firstName: string;
        middleName: string;
        lastName: string;
        age?: number // optional property
        isMarried: boolean;
    } = {
        companyName: 'Programming Hero',
        firstName: 'Md.',
        middleName: 'Monirul',
        lastName: 'Islam',
        isMarried: false
    }

    user.firstName = 'gsd'; // OK

}