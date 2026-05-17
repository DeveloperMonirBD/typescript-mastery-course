{
    // spread operator
    // rest operator
    // destructuring

    // learn spread operator
    const group1: string[] = ['Mir', 'Ashiq', 'Reza'];
    const group2: string[] = ['Tonmoy', 'Nahid', 'Sakib'];
    group1.push(...group2);

    // for object operator
    const mentor1 = {
        prisma: 'Mir',
        next: 'Ashiq',
        cloud: 'Reza'
    };

    const mentor2 = {
        react: 'Sabbir',
        redux: 'Asraf',
        dbms: 'Rasel'
    };

    const mentorList = {
        ...mentor1,
        ...mentor2
    };

    // without rest operator
    const greetFriends = (fr1: string, fr2: string, fr3: string) => {
        console.log(`hi ${fr1} ${fr2} ${fr3}`);
    };
    greetFriends('rafi', 'safi', 'kafi');

    // rest operator
    const greetFriends1 = (...friends: string[]) => {
        //  console.log(`hi ${fr1} ${fr2} ${fr3}`);
        friends.forEach((friend: string) => console.log(friend));
    };
    greetFriends1('rafi', 'safi', 'kafi', 'Jisan', 'Sagor');
}
