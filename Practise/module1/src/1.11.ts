{
    // * ternary operator || optional chaining || nullish coalescing operator
    let age = 12;

    // if (age >= 18) {
    //     console.log("adult")
    // } else {
    //     console.log("not adult")
    // }

    // ternary operator
    const isAdult = age >= 18 ? "adult" : "Not Adult";
    console.log(isAdult)

    // nullish coalescing operator
    // null / undefined ---> ar upor decision making
    
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? "Guest";

    const result2 = isAuthenticated ? isAuthenticated : "Guest"; 
    console.log(result1, result2)


    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user: User = {
        name: 'Rakib',
        address: {
            city: "Jessore",
            road: "Bagherpara",
            presentAddress: "Karitala, Bagherpara, Jashore."
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address'

    console.log(permanentAddress);




    //
}