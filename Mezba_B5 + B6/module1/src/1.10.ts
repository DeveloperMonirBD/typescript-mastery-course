{
    // union types
    type UserName = string | number | boolean; // union type
    const userName: UserName = 'Monirul'; // string

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    const newDeveloper: FrontendDeveloper = 'fakibazDeveloper'
    

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
    }

    const user1: User = {
        name: "Monirul",
        gender: "male",
        bloodGroup: "A+",
    }
    console.log(user1)



    // intersection types
    type FrontendDeveloper1 = {
        skills: string[];
        designation1: 'Frontend Developer'
    }

    type BackendDeveloper1 = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper =  FrontendDeveloper1 & BackendDeveloper1; // intersection type
    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'JSVAScript', 'React', 'NodeJS'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }



}