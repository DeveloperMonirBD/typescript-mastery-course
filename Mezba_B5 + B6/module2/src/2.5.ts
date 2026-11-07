{
    // function with generics
    const createArray = (param: string): string[]=> {
        return [param]
    }
    const result = createArray('Bangladesh')
    console.log(result)

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    type User = { id: number; name: string };
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')
    const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: 'Mr. Pashan' })
    

    // Touple with Generic
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

   const res1 = createArrayWithTuple<string, number>("Bangladesh", 353543535)
    console.log(res1)


    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'Mr. X', email: 'x@gmail.com', devType: 'Next Level Web Developer' })
    
    const student2 = addCourseToStudent({name: 'Mr Y', email: 'Y@gmail.com', hasWatch: 'Apple Watch'})

}