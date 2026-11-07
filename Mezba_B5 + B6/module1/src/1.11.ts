{
    
    // ternary operator || optional chaining || nullish coalescing operator

    const age : number = 15;

    if (age > 18) {
        console.log('Adult');
    } else {
        console.log('Not Adult');
    }

    // Using ternary operator
    const isAdult = age > 18 ? 'Adult' : 'Not Adult'
    console.log({isAdult})

    // Nullish coalescing operator
    // null / undefined --> decition making
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 })
    

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentaddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'John Doe',
        address: {
            city: 'New York',
            road: '5th Avenue',
            presentaddress: 'ctg town',
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No Address Found'
    console.log({permanentAddress})





}