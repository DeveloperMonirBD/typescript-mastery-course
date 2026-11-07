{
    // Learning function
    // Normal function
    // Arrow function

    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }
    add(2);


    // arrow function
    const addArrow = (num1: number, num2: number): number => num1 + num2;
    addArrow(2, 4);

    // object --> function --> method
    const poorUser = {
        name: 'Monirul',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is : ${this.balance + balance}`;
        }
    };

    const arr: number[] = [1, 2, 3, 4, 5];

    const newArr: number[] = arr.map((elem: number): number => elem * elem);
}
