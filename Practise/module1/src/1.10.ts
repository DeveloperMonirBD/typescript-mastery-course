{
    // * Union and Intersection Types

    // union types :  | --> hoi ata hobe nai ota hobe. ata or operator moto kaj kore
    type FrontendDeveloper1 = 'fakibazDeveloper' | 'juniorDeveloper';

    const newDeveloper: FrontendDeveloper1 = 'fakibazDeveloper';

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'A+' | 'AB+';
    };

    const user1: User = {
        name: 'Monir',
        email: 'mrmonir0558@gmail.com',
        gender: 'male',
        bloodGroup: "AB+"
    }
    
    const user2: User = {
        name: 'Ashok',
        email: 'ashiq@gmail.com',
        gender: 'male',
        bloodGroup: 'O+'
    }


    // Intersection types: & --> ata and operater ar moto kaj kore. sobgulo thakte hobe.
    
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }
    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    };



    





    //
}
