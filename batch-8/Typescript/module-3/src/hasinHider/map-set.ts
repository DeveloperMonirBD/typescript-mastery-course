//* Set
const data = new Set<string>();
data.add("monir");
// data.add(14); // undefined

console.log(data)

//* Map
const players = new Map<string, number>()
players.set("Ronaldo", 7);
players.set("Messi", 10);
players.set("Naymar", 10);

console.log(players)

//* Map
const orders = new Map<string, number>()

function addOrder(juice: string) { 
    const quantity = (orders.get(juice) ?? 0) + 1
    orders.set(juice, quantity)
}

addOrder('lemon')
addOrder('lemon')
addOrder('Mango')
addOrder('Mango')
addOrder('lemon')
addOrder('lemon')

console.log(orders)