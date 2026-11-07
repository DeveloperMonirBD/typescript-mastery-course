{
    // oop - inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getsleep(numOfhours: number) {
            console.log(`${this.name} will sleep for ${numOfhours}`);
        }
    }

    // ---------------------------------

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
          super(name, age, address)
        }
    }

    const student1 = new Student("Mr. Monir", 20, "Uganda");
    student1.age

    // --------------------------------

    class Teacher extends Person {
        // name: string;
        // age: number;
        // address: string;
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            // this.name = name;
            // this.age = age;
            // this.address = address;
            this.designation = designation
        }
        // getsleep(numOfhours: number) {
        //     console.log(`${this.name} will sleep for ${numOfhours}`);
        // }

        takeClass(numberOfClass: number) {
            console.log(`${this.name} will take ${numberOfClass}`)
        }
    }

    const teacher = new Teacher('Mr. Teacher', 40, 'Uganda', 'Professor');
    teacher.address
    // 
}