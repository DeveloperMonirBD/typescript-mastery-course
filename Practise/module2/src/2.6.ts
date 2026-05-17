{
    // constraints -> extends keyword ar maddhomea constraints kora jai. ja gule extends kora hobe sa gula obossoii thakte hobe.

    const addCourseToStudent = <T extends { id: number; name: string; email: string}>(student: T) => {
         const course = 'Next Level Web Development';

         return {
             ...student,
             course
         };
     };

     type Student1 = {id: number, name: string; email: string; devType: string };
     type Student2 = {id: number, name: string; email: string; hasWatch: string };

    const student1 = addCourseToStudent<Student1>({id: 3234, name: 'Mr. X', email: 'x@gmail.com', devType: 'NLWD' });
    
     const student2 = addCourseToStudent<Student2>({id:7432, name: 'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch' });
    console.log(student1, student2);
    

    //

}