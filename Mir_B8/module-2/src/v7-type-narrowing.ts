//* typeof

let x = ['abc'];

console.log(typeof x === 'object');

//* Type Guard

const print = (value: string | number) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else {
        return value;
    }
};

//* Truthiness

type User = {
    name: string;
    address?: {
        street: string;
    };
} | null;

const loggedInUser: User = {
    name: 'Monir',
    address: {
        street: 'ABC'
    }
};

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.street);
    }
    throw new Error('User not found');
};

//* some caveat of type Guard
// const printAll = (x: string | string[] | null) => {
//     //* for...of — Values পাওয়ার জন্য। for...in Array/[]এর ক্ষেত্রে কাকজ করে।

//     //* for...in — Keys বা Index পাওয়ার জন্য । for...in object/{}-এর ক্ষেত্রে কাজ করে।

//     if (x && typeof x === 'object') {
//         for (let str of x) {
//             console.log(str);
//         }
//     } else if (typeof x === 'string') {
//         console.log(x);
//     } else {
//         console.log('');
//     }
// };

// printAll(null);

//* Equality
const compare = (x: number | string, y: number | boolean) => {
    if (x === y) {
        console.log(x, y);
    }
};

const printAll = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === 'object') {
            for (let str of x) {
                console.log(str);
            }

            return;
        }

        console.log(x);
        return;
    }
    console.log('');
    return;
};

printAll('fafa');

//* "in" operation

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
    if ('fly' in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};

//* "instanceof" check
// const date = new Date();
// const err = new Error("Something went wrong")

// console.log(date instanceof Date);
// console.log(err instanceof Error)

const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }

    const date = new Date(x);
    console.log(date.toISOString());
};

showDate(new Date('12-16-1971'));

//* Discriminated union
interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

const getArea = (shape: Circle | Square) => {
    if (shape.kind === 'circle') {
        console.log(shape.radius);
    } else {
        console.log(shape.sideLength);
    }
};
