{

    // spread operator
    // rest operator
    // destructuring

    // learn spread operator
    // array
    const friends1: string[] = ['John', 'Jane', 'Jack'];
    const friends2: string[] = ['Tom', 'Jerry', 'Spike'];

    friends1.push(...friends2)

    // object
    const mentors1 = {
        typescript: 'Mezbah',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }
    console.log(mentorList); // { typescript: 'Mezbah', redux: 'Mir', dbms: 'Mizan', prisma: 'Firoz', next: 'Tanmoy', cloud: 'Nahid' }



    // learn rest operator
    
    const Friends = (friend1 : string, friend2 : string, friend3 : string) => {
        console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
    }
    Friends('John', 'Jane', 'Jack'); // Hi John, Jane, Jack


    const greetFriends = (...friends : string[]) => {
        friends.forEach((friend : string) => console.log(`Hi ${friend}`))
    };
    greetFriends('John', 'Jane', 'Jack');







}