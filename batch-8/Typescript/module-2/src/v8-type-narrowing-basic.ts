//? টাইপ ন্যারোইং (Type Narrowing) ইন টাইপস্ক্রিপ্ট:

function printId(id: string | number) {
    console.log(id.toUpperCase()); // ❌ Error! কারণ number-এর ক্ষেত্রে toUpperCase() কাজ করবে না।
}

//? ১. typeof গার্ড (Primitive Type-এর জন্য)

function printValue(val: string | number) {
    if (typeof val === 'string') {
        // এখানে val নিশ্চিতভাবেই একটি string!
        console.log(val.toUpperCase());
    } else {
        // এখানে val নিশ্চিতভাবেই একটি number!
        console.log(val.toFixed(2));
    }
}

//? ২. in অপারেটর গার্ড (অবজেক্টের প্রোপার্টি চেক করতে)

interface Admin {
    name: string;
    manageUsers: () => void;
}

interface User {
    name: string;
    login: () => void;
}

function handleUser(person: Admin | User) {
    if ('manageUsers' in person) {
        // টাইপস্ক্রিপ্ট বুঝে নিয়েছে এটি Admin অবজেক্ট
        person.manageUsers();
    } else {
        // এটি User অবজেক্ট
        person.login();
    }
}

//? ৩. instanceof গার্ড (ক্লাসের ইনস্ট্যান্স চেক করতে)

function logValue(x: Date | string) {
    if (x instanceof Date) {
        // এখানে x হলো একটি Date অবজেক্ট
        console.log(x.toUTCString());
    } else {
        // এখানে x সাধারণ string
        console.log(x.toUpperCase());
    }
}

//? ৪. ডিসক্রিমিনেটেড ইউনিয়ন (Discriminated Unions) - প্রফেশনাল টেকনিক

type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; sideLength: number };

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            // TypeScript নিশ্চিত জানে এটি Circle
            return Math.PI * shape.radius ** 2;
        case 'square':
            // TypeScript নিশ্চিত জানে এটি Square
            return shape.sideLength ** 2;
    }
}

//? ৫. কাস্টম টাইপ গার্ড (Custom Type Predicates)

interface Fish {
    swim: () => void;
}
interface Bird {
    fly: () => void;
}

// কাস্টম টাইপ গার্ড ফাংশন
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim(); // safely Fish
    } else {
        pet.fly(); // safely Bird
    }
}
