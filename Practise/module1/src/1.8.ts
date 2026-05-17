{


    // destructuring -->  1. object destructuring and 2. array destructuring

    // 1. object destructuring
    const user = {
        id: 23442,
        name: {
            firstName: 'Mezbaul',
            middleName: 'Abedin',
            lastName: 'Partian'
        },
        contactNo: '01628974675',
        address: 'Uganda'
    };

    // akhanea type baboher kora jabe na sudhumatro nam change korar jonno "Name Alias" baboher kora jabe ..

    // Name alias
    const {
        name: { firstName, middleName, lastName },
        contactNo: phoneNumber,
        address
    } = user;

    // 2. array destructuring
    const myFriends = ['Sakib', 'Ayra', 'Jarif', 'Sabiha', 'Nahian'];
    // const [a, b, c] = myFriends;
    // const [a, b, Jisan] = myFriends;
    const [, , Jisan, ...rest] = myFriends;



}
