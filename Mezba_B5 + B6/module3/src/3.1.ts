{
    // OOP - class
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // // parameter properties

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`);
        }
    }

    const cat = new Animal('German Shepard', 'cat', 'meew meewww');
    cat.makeSound();

    //
}
