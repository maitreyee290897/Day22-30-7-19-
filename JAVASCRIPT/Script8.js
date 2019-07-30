// JavaScript source code
let promice = fetch('https://jsonplaceholder.typicode.com/users')
const rootElem = document.querySelector('#users');
let data = [];

promise
    .then(response => response.json())
    .then(users => )