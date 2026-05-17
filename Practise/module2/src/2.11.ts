{
    // utility types
    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }
    
    type NameAge = Pick<Person, 'name' | 'age'>

    // Omit -- bad daua..
    type contactInfo = Omit<Person, "name" | "age">

    // Required -> Baddho ta mulok sobgula baboher kortei hobe. 
    type PersonRequired = Required<Person>

    // Partial --> Optional korea dibe
    type PersonPartial = Partial<Person>
    
    // Readonly --> kono Poriborton korte parbe na.
    type PersonReadonly = Readonly<Person>
  
    const person1: PersonReadonly = {
        name: 'Monir',
        age: 29,
        contactNo: '0173453456'
    };

    person1.name = "Mr. Rifat";

    // Record 
    // type MyObj = {
    //     a: string;
    //     b: string
    // };

    // type MyObj = Record<string, string> 
    type MyObj = Record<string, unknown> 
    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: 45
    }















}