// class Employee {
//     name: string;
//     baseSalary: number;

//     constructor(name: string, baseSalary: number) {
//         this.name = name;
//         this.baseSalary = baseSalary;
//     }
// }

// const employee = new Employee('Mir', 22000);
// const employee2 = new Employee('Mizan', 24000);

// console.log(employee instanceof Employee);
// console.log(employee2 instanceof Employee);

//? ১. Encapsulation (এনক্যাপসুলেশন - ডেটা সিকিউরিটি ও হাইডিং)

//* exp:1 (Employee Class with Private Salary)

class Employee {
    public name: string;
    private baseSalary: number; // private করায় বাইরে থেকে স্যালারি ভুলভাবে পরিবর্তন করা যাবে না

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    // Getter method দিয়ে শুধু স্যালারি দেখা যাবে
    getSalary(): number {
        return this.baseSalary;
    }

    // Setter/Method দিয়ে নিয়ম মেনে বোনাস বা স্যালারি বাড়ানো যাবে
    addBonus(amount: number): void {
        if (amount > 0) {
            this.baseSalary += amount;
        }
    }
}

// exp:2 (FullTimeEmployee Class Extending Employee)

class FullTimeEmployee extends Employee {
    public bonus: number;

    constructor(name: string, baseSalary: number, bonus: number) {
        super(name, baseSalary); // প্যারেন্ট ক্লাসের constructor কল করা হলো
        this.bonus = bonus;
    }

    // বোনাসসহ মোট স্যালারি
    getTotalSalary(): number {
        return this.getSalary() + this.bonus;
    }
}

const employee = new FullTimeEmployee('Mir', 22000, 5000);
const employee2 = new FullTimeEmployee('Mizan', 24000, 6000);

// exp:3 (BankAccount Encapsulation Example)

class BankAccount {
    // private প্রপার্টি বাইরে থেকে সরাসরি অ্যাক্সেস করা যাবে না
    private balance: number;

    constructor(
        public holderName: string,
        initialBalance: number
    ) {
        this.balance = initialBalance;
    }

    // Getter method দিয়ে সিকিউরড উপায়ে ব্যালেন্স দেখা যাবে
    // getBalance(): number {
    //     return this.balance;
    // }

    get getBalance(): number {
        return this.balance;
    }

    // Setter method দিয়ে ব্যালেন্স আপডেট করা যাবে (ভ্যালিডেশনসহ)
    // deposit(amount: number): void {
    //     if (amount > 0) {
    //         this.balance += amount;
    //         console.log(` ${amount} BDT added successfully!`);
    //     }
    // }

    set deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(` ${amount} BDT added successfully!`);
        }
    }
}

const myAccount = new BankAccount('Monir', 1000);

// myAccount.deposit(500);
myAccount.deposit = 500;

// console.log(`Current Balance: ${myAccount.getBalance()} BDT`);
console.log(`Current Balance: ${myAccount.getBalance} BDT`);
// আউটপুট: Current Balance: 1500 BDT

//? ২. Inheritance (ইনহেরিটেন্স - কোড রিইউজবিলিটি)

//* exp:4 (Person to Student Inheritance)

class Person {
    constructor(
        public name: string,
        public age: number
    ) {}

    eat(): void {
        console.log(` ${this.name} is having meal.`);
    }
}

// Student ক্লাস Person কে ইনহেরিট করছে
class Student extends Person {
    constructor(
        name: string,
        age: number,
        public studentId: number
    ) {
        super(name, age); // super() দিয়ে প্যারেন্ট ক্লাসের ডেটা ইনিশিয়ালাইজ করা হলো
    }

    study(): void {
        console.log(` ${this.name} is building awesome apps with TypeScript! `);
    }
}

const student1 = new Student('Monir', 22, 101);
student1.eat(); // আউটপুট:  Monir is having meal.
student1.study(); // আউটপুট:  Monir is building awesome apps with TypeScript!

// ৩. Polymorphism (পলিমরফিজম - বহু রূপ ও ফ্লেক্সিবিলিটি)

//* exp:5 (Animal Sound Method Overriding)

class Animal {
    makeSound(): void {
        console.log('Animal makes a sound...');
    }
}

class Dog extends Animal {
    // মেথড ওভাররাইড করা হলো
    makeSound(): void {
        console.log(' Woof! Woof!');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(' Meow! Meow!');
    }
}

// পলিমরফিক ফাংশন
function printAnimalSound(animal: Animal) {
    animal.makeSound();
}

printAnimalSound(new Dog()); // আউটপুট:  Woof! Woof!
printAnimalSound(new Cat()); // আউটপুট:  Meow! Meow!

//? ৪. Abstraction (অ্যাবস্ট্রাকশন - জটিলতা লুকিয়ে রাখা)

//* exp:6 (Vehicle Abstract Class Example)

abstract class Vehicle {
    // অ্যাবস্ট্রাক্ট মেথড (চাইল্ড ক্লাসে এটি থাকতেই হবে)
    abstract startEngine(): void;

    move(): void {
        console.log(' Vehicle is moving smoothly on the highway...');
    }
}

class Car extends Vehicle {
    startEngine(): void {
        console.log(' Car engine started with a push-button start system!');
    }
}

const myCar = new Car();
myCar.startEngine(); // আউটপুট:  Car engine started with a push-button start system!
myCar.move(); // আউটপুট:  Vehicle is moving smoothly on the highway...
