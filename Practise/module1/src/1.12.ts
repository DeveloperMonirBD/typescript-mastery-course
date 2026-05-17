{
    // nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching..")
        } else {
            console.log("There is nothing to search");
        }
    }

    searchName(null)

    // unknown types --> type of
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        } else if (typeof value === "string") {
            const [speed, ...rest] = value.split(' ');

            const convertedSpeed = (parseFloat(speed!) * 1000) / 3600;
             console.log(`The speed is ${convertedSpeed} ms^-1`);
        } else {
            console.log("wrong Input")
        }
    }

    getSpeedInMeterPerSecond(`1000 kmh^-1`);

    // never 
    const  throwError = (msg: string) : never => {
        throw new Error(msg);
    }
    throwError('Muskil se error hogeya')











    //
}