{
    // Function Type : 2 type --> 1. Normal Fun. 2. Arrow Fun.

    // Normal function
    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }
    add(2, 3)

    // Arrow function
    const addArrow = (num1: number, num2: number): number => num1 + num2
    addArrow(3, 5)

    // object ar moddhea kono function thakle takea method bolea. object ar moddhea kono function thakle take amra function bolbo na.. bolbo method.
    //Method
    const poorUser = {
        name: 'Monir',
        balance: 0,
        // addBalance(balance: number) : number {
        //     return this.balance + balance
        // },

        addBalance(balance: number): string {
            return `My new balance is : ${this.balance + balance}`
        }
    }

    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const newArray: number[] = arr.map((element: number): number => element * element)

}