{
    // interface - generic
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T;
        bike?: X
    }

    type EmailWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmailWatch> = {
        name: 'Persian',
        computer: {
            brand: 'Asus',
            model: 'X-255UR',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Asus Watch',
            model: 'kw43',
            display: 'IPS'
        }
    };

    type SmartWatch = {
        brand: string;
        model: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    };

    interface Bike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<SmartWatch, Bike> = {
        name: 'Rich Dev',
        computer: {
            brand: 'Mack',
            model: 'Air4',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'e434',
            display: 'OLED',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'
        }
    };


    //
}