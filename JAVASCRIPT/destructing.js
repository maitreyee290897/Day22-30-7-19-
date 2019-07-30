// JavaScript source code
let players=['virat', 'rohit', 'dhoni', 'raina', 'dhawan']

const [captain, , vCaptain] = players;

console.log(`captain : ${captain}, vice-captain: ${vCaptain}`)
//insted of
/*
 const captain = players[0];
 const vcaptain = players[1];

 */

//swapping the values
let batsman = 'sachin';
let runner = 'ganguli';
[batsman, runner] = [runner, batsman];
console.log(`after the run, the batsman is ${batsman} and runner is ${runner}`)

//object destructuring 
let player = {
    name: 'virat kohli',
    centuries: 28,
    halfCenturies: 60,
    matches: 350,
}

 player = {
    name: 'kkk kohli',
    centuries: 28,
    halfCenturies: 60,
    matches: 350,
    playsFor: 'aust',
}

const { name: playerName, centuries, halfCenturies, matches, playsFor = 'india' } = player;
//console.log(`${playerName} has played ${matches} number of matches and has scored ${centuries} played for ${playsFor}`);



/*
let currencyCalculator = function (amount) {
    return {
        'inr': amount,
        'usd': amount / 68,
        'euro' : amount / 80
    }
}

const { usd: amountInDollers } = currencyCalculator(50);
console.log(`amount in dollers ${amountInDollers}`)
*/

let item = {
    name: 'iphone',
    price: 10800
}


let currencyCalculator = function ({ price: amount }) {
    return {
        'inr': amount,
        'usd': amount / 68,
        'euro': amount / 80
    }
}

const { usd: amountInDollers } = currencyCalculator(item);
console.log(`amount in dollers ${amountInDollers}`)

