{
    // Reference Type --> Object Types
    const user: {
        company: 'Programing Hero'; // litaral type --> ai name e baboher korte hobe.
        readonly country: 'Bangladesh'; // access Modifire --> ata change kora jabe na
        firstName: string;
        middleName?: string; // optional type. thakteao pare nao pare.
        lastName: string;
        isMarried: boolean | undefined;
    } = {
        company: 'Programing Hero',
        country: "Bangladesh",
        firstName: 'Mezbaul',
        // middleName: "Haque",
        lastName: 'Abedin',
        isMarried: true
    };

    user.country = "England"

}