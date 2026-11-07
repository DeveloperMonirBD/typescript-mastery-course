{
    // Object Destructuring
    const user = {
        id: 123435,
        name: {
            firstName: 'Md.',
            middleName: 'Monirul',
            lastName: 'Islam'
        },
        contactNo: '01700000000',
        address: 'Dhaka'
    };

    const {
        contactNo,
        name: { middleName }
    } = user;

    // Array Destructuring

    const myFriends = ['Monirul', 'Shakib', 'Sabbir', 'Rafiq', 'Sadman'];
    const [, , bestFriend] = myFriends; // Sabbir
    const [, , bestFriend1,...rest] = myFriends; // Sabbir, ['Rafiq', 'Sadman']











}
