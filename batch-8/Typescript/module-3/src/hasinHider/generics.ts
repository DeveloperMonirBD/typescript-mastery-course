// //* 1.
// const fruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const numbers: number[] = [1, 2, 3, 4, 5];

// function getFirstItem<T>(items: T[]): T{
//     return items[0];
// }

// const firstFruit = getFirstItem(fruits);
// const firstNumber = getFirstItem(numbers);

// console.log(firstFruit.toUpperCase(), firstNumber)

//* 2.
type User = {
    id: number;
    name: string;
    email: string;
};

type Product = {
    id: number;
    name: string;
    price: number;
};

type Order = {
    id: number;
    userId: number;
    total: number;
    date: string;
    status: 'pending' | 'shipped' | 'delivered';
};

// /api/users, /api/products, /api/orders

// //! fetch users
// async function getUsers(): Promise<User[]> {
//     const data = await fetch('/api/users');
//     return data.json();
// }
// const users = await getUsers()
// users[0].email

// //! fetch product:
// async function getProduct(): Promise<Product[]> {
//     const data = await fetch('/api/product');
//     return data.json();
// }
// const products = await getProduct();
// products[0].price

// //! fetch Order:
// async function getOrder(): Promise<Order[]> {
//     const data = await fetch('/api/order');
//     return data.json()
// }
// const orders = await getOrder();
// orders[0].total

//* Dynamic Generic Function:
async function get<T>(apiEndpoint: string): Promise<T> {
    const data = await fetch(apiEndpoint);
    return data.json();
}

const users = await get<User[]>('/api/users');
const products = await get<Product[]>('/api/products');
const orders = await get<Order[]>('/api/orders')

users[0].email;
products[0].name;
orders[0].userId;