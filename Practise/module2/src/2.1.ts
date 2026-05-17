{
    // type assertion -> typescript k  sora--sori type bole daua hoi "as" keyword ar maddhomea.

    let anything: any;
    anything = 'Next Level Web Development';
    anything = 15;

    // (anything as string).
    // (anything as number).

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue} G.`;
        } else if (typeof value === 'number') {
            const convertedValue = value * 1000;
            return `The converted value is : ${convertedValue} G.`;
        }
    };

    const result = kgToGm(500) as number;
    const result1 = kgToGm('100') as string;

    console.log(result, typeof result1);

    // try catch func.
    type CustomError = {
        message: string;
    };

    try {
    } catch (err) {
        console.log((err as CustomError).message);
    }

    //
}