{
    // mapped types

    const arrOfNumbers: number[] = [1, 2, 4, 6];

    // const arrOfStrings : string[] = ['1', '3', '4']

    const arrOfStrings: string[] = arrOfNumbers.map(number => number.toString())
    console.log(arrOfStrings)


    type AreaNumber = {
        height: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string
    // }

    // map type ==> number to string converted
    type AreaString = {
        // [key in "height" | "width" | "depth"] : string
        [key in keyof AreaNumber] : string
    }

    // look up type ==> You can get value from key
    type Height = AreaNumber["height"]


    // Gemneric
    // T => {height: string: width: number}
    // key => T["width"]
    
    type AreaString1<T> = {
        [key in keyof T ] : T[key]
    }
    const area1: AreaString1<{ height: string; width: number }> = {
        height: "100",
        width: 50
    }

   


  
    





    // 
}