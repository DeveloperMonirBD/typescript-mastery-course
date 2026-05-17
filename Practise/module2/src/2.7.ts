{
    // generic constraint with "keyof" operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; //manually
    type Owner2 = keyof Vehicle
    // const person1:Owner2 =''

    const user = {
        name: 'Monir',
        age: 29,
        address: 'jsr'
    }
    // user.address
    // user['age']
    
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y)=> {
        return obj[key]
    }
    const result = getPropertyValue(user, 'name');
    console.log(result)








    //
}