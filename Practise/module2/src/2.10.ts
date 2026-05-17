{
    // Mapped Types --> convert number[] to string[]
    const arrofNumbers: number[] = [1, 4, 5];

    const arrOfStrings: string[] = arrofNumbers.map(number => number.toString());

    console.log(arrOfStrings);

    // key in
    type AreaNumber = {
        height: number;
        width: number;
    };

    // key theakea value ber korar process.. -> Look up Type
    type Height = AreaNumber['height'];

    // keyof AreaString => "height" | "width";
    type AreaString = {
        // [key in "height" | "width"] : string
        [key in keyof AreaNumber]: string;
    };

    // --------------------------------

    type AreaString1<T> = {
        // [key in "height" | "width"] : string
        [key in keyof T]: T[key];
    };

    // 1. keyof AreaString => "height" | "width";
    // 2. [key in keyof T] -->  "height" | "width";
    // 3. T[key] --> string | number

    // key theakea value ber korar process.. -> Look up Type
    // type Height = AreaNumber['height'];

    const area1: AreaString1<{
        height: string;
        width: number;
    }> = {
        height: '100',
        width: 50
    };

    //
}
