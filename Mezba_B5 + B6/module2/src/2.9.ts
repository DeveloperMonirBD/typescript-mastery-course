{
    // conditional type:

    type a1 = number
    type b1 = undefined

    type x = a1 extends null ? true : false
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }

    // car asea kina / bike asea kina / ship asea kina / tractor ase kina
    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false
    

    type HasShip = CheckVehicle <"ship">

    // 
}