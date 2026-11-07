{
    // instanceof guard

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('I am making sound');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log('I am barking');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMew() {
            console.log('I am mewing');
        }
    }

    // smart way tea handle korar jonne chilea amra function baboher korte pari.
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    };

    // const getAnimal = (animal: Animal) => {
    //     if (animal instanceof Dog) {
    //         animal.makeBark();
    //     } else if (animal instanceof Cat) {
    //         animal.makeMew()
    //     } else {
    //         animal.makeSound()
    //     }
    // }
    
    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMew();
        } else {
            animal.makeSound();
        }
    };

    const dog = new Dog('Dog Bhai', 'dog');
    const cat = new Cat('Cat Bhai', 'cat');

    getAnimal(cat);

    /*
    * typeof vs instanceof:-
   * JavaScript এ instanceof operator ব্যবহার করা হয় কোনো object নির্দিষ্ট class বা constructor function থেকে তৈরি হয়েছে কিনা তা check করার জন্য।

    typeof: 
    1. Primitive type check করে
    2. string return করে

instanceof:
    1. Object type check করে
	2. boolean return করে

*/
}
