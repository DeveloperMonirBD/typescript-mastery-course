{
    //function with generics

    const createArray = (param: string): string[] => {
        return [param];
    };
    const res1 = createArray('Bangladesh');

    // generic fn:
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    type User = { id: number; name: string };
    const resGenericObj = createArrayWithGeneric<User>({ id: 232432434434343, name: 'Mr. X' });
    console.log(resGenericObj);

    // generic tuple
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const resTuple = createArrayWithTuple<string, { name: string }>('Bangladesh', { name: 'Asia' });
    console.log(resTuple);

    // -----
    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        };
    };

    type Student1 = { name: string; email: string; devType: string };
    type Student2 = { name: string; email: string; hasWatch: string };

    const student1 = addCourseToStudent<Student1>({ name: 'Mr. X', email: 'x@gmail.com', devType: 'NLWD' });
    const student2 = addCourseToStudent<Student2>({ name: 'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch' });
    console.log(student1, student2);

    //
}
