let vegdishes = ['DOSA', 'IDLI', 'PULAV']
let nonveg = ['chicken biryani', 'egg-rice']

const dishes = [...vegdishes, 'tanduri-roti', 'PULAV', ...nonveg]
dishes.forEach(dish => console.log(dish));

console.log(dishes);

let item = {
    name: 'Iphone',
    price: 19000,
    details: {
        od:'ios'
    }
}

const props = {...item }
console.log(props)

let players = ['virat', 'rohit', 'dhawan','zzz','rrrr'];
const [captain, vcaptain, ...team] = players;
console.log(team);

let player = {
    name: 'virat',
    centuries: 28,
    halfCenturies: 60,
    kkk:3525,
    matches: 350,
}

const { name: playerName, centuries, matches, ...properties } = player;
console.log(properties)