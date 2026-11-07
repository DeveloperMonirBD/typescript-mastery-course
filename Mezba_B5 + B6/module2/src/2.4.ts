{
    // generic interface ->
    // generic  ar maddhomea amra dynamic type create korte pari abong sata re_use korte pari.

    // Generic with Array of object type

    type GenericArray<T> = Array<T>;

    // type User = {
    //     name: string;
    //     age: number;
    // }

    interface User {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: 'John',
            age: 32
        },
        {
            name: 'Jane',
            age: 28
        },
        {
            name: 'Doe',
            age: 25
        }
    ];

    // Interface with generic type

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    };

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Monir',
        computer: {
            brand: 'Asus',
            model: 'X-2453Ur',
            releaseYear: 2014
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw343',
            display: 'OLED'
        }
    };

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Devid',
        computer: {
            brand: 'Apple',
            model: 'A-2ge3',
            releaseYear: 2024
        },
        smartWatch: {
            brand: 'AppleWatch',
            model: 'mk654',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '1000cc'
        }
    };
}
