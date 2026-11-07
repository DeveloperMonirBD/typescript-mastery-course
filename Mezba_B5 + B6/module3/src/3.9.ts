{
    // abstraction ==> Idea --> 1. inteface, 2. abostract

    // idea
    interface Car1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Car1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }

        stopEngine(): void {
            console.log(`I am stoping the car engine`);
        }

        move(): void {
            console.log(`I am moving the car`);
        }

        test() {
            console.log(`I am just testing`);
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();

    //----------------------------

    // abstract class

    // idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;

        test() {
            console.log(`I am just testing`);
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('I am starting the car engine')
        }
        stopEngine(): void {
            console.log('I am stoping the car engine')
        }
        move(): void {
            console.log('I am moving the car')
        }
    }

    const hondaCar = new Car2();
    hondaCar.startEngine();

    //
}
