
interface BaseAccount {
    readonly id: number;
    name: string;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    status(): void;
}

class Account implements BaseAccount {
    protected isLimited: boolean = false;
    protected limit: number = 0;

    constructor(
        public readonly id: number,
        public name: string,
        protected balance: number
    ) {}

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.isLimited && amount > this.limit) {
            throw new Error(`You cannot withdraw more than your limit of ${this.limit}`);
        }

        if (this.balance < amount) {
            throw new Error('Insufficient balance');
        }

        this.balance -= amount;
    }

    status(): void {
        console.log(`Account ID: ${this.id} | Name: ${this.name} | Balance: ${this.balance}`);
    }
}

class StudentAccount extends Account {
    protected isLimited: boolean = true; // লিমিট অ্যাক্টিভ করা হলো
    protected limit: number = 10000; // স্টুডেন্ট অ্যাকাউন্টের সর্বোচ্চ লিমিট
}

class SavingsAccount extends Account {
    protected isLimited: boolean = true; // লিমিট অ্যাক্টিভ করা হলো
    protected limit: number = 50000; // সেভিংস অ্যাকাউন্টের সর্বোচ্চ লিমিট
}

class CurrentAccount extends Account {
    // কারেন্ট অ্যাকাউন্টে সাধারণত কোনো উইথড্র লিমিট থাকে না (isLimited = false ডিফল্টভাবেই আছে)
}

//* Check Student Account:
const studentAccount = new StudentAccount(101, 'Student A', 30000);
studentAccount.withdraw(5000); // সফল হবে (৫০০০ <= ১০০০০)
studentAccount.status();

//* Check Savings Account:
const savingsAccount = new SavingsAccount(102, 'Student B', 60000);
savingsAccount.withdraw(10000); // সফল হবে (১০০০০ <= ৫০০০০)
savingsAccount.status();

//* Check Current Account:
const currentAccount = new CurrentAccount(103, 'Student C', 50000);
currentAccount.withdraw(40000); // কোনো লিমিট নেই, তাই সফল হবে
currentAccount.status();



