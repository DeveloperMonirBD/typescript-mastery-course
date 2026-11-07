{
    // constraints => Obosooi thakte hobe.

    const addCourseToStudent = <T extends { id: number; name: string;  email: string}>(student: T) => {
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        };
    };

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({ id: 4354, name: 'Mr. X', email: 'x@gmail.com', devType: 'Next Level Web Developer' });

    const student2 = addCourseToStudent({ id: 5363, name: 'Mr Y', email: 'Y@gmail.com', hasWatch: 'Apple Watch' });
    const student3 = addCourseToStudent({ id: 758, name: 'Mr.S', email: 's@gmail.com', emni: 'emni' });

    //
}
