{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // seter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // getter
        get balance() {
            return this._balance;
        }
    }

    const goribManuserAccount = new BankAccount(111, 'Mr. X', 40);

    goribManuserAccount.deposit = 50;

    const myBalance = goribManuserAccount.balance; // property ar moto kore.
    console.log(myBalance);

    //
}
