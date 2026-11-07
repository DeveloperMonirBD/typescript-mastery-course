//* type alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives


//TODO: type alias

type ID = number;
//! interface = number;

type Role = 'admin' | 'number';
//! interface "admin" | "number";

interface User {
    id: ID;
    name: string;
    role: 'admin' | 'user';
}

const user: User = {
    id: 231,
    name: 'Monir',
    role: 'admin'
};

//TODO: interface

interface Animal { 
    species: string;
}

//? using extends
interface Cat extends Animal { 
    breed: string;
}

const cat: Cat = { 
    breed: "Persian",
   species: "Felix Catus"
};

//? type alias and Intersection (&)
type Vehicle = {
    brand: string;
}
type Car = Vehicle & {
    model: string
}

const car: Car = {
    model: "Corolls",
    brand: "Toyota"
}