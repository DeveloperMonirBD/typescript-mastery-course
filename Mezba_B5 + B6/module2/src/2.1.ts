{
    // Type Assertion

    let anything: any;

    anything = "Next Level Web Development";
    
    anything = 222;

    // (anything as string).

    const kgToGm = (value: string | number) : string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted value is : ${convertedValue}`
        } else if (typeof value === "number") {
            return value * 1000
        } else {
            throw new Error ("Invalid type")
        }
    }

    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("1000") as string
    console.log(result1)

    type CustomError = {
        message: string
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message)
    }
 



}