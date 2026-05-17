{
    // utility types
    //  Pick : tulea ana
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">
    

    // Omit : bad daua
    type ContactInfo = Omit<Person, "name" | "age">
    
    // Required : Baddhotamulok
    type PersonRequired = Required<Person>

    // Partial: Optional
    type PersonPartial = Partial<Person>
    
    // ReadOnly: change kora jabe na
    
    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: 'Me. XY',
        age: 200,
        contactNo: '01243454535'
    };
    person1.name = "Mr. YZ"


    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const EmptyObj : Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }



    // 

}