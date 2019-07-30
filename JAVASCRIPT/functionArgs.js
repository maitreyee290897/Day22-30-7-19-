/*
let sum = function(a,b){
return a+b;
}

let sub = function(a,b){
return a-b;
}

let product = function(a,b){
return a*b;
}

let calculate = function(a,b, fun){
  //fun(a,b);
 return fun(a,b);
}

var concat = function(a,b){
console.log('came in '+b)
return a + b;
}

//calculate("hii","hello",concat);

console.log(calculate("hello", "worls", function(a,b){
return a+b;
}));
*/

let sum =(a,b) => a+b;

let sub = (a,b)=> a-b;

let product = (a,b) => a*b;

let calculate = (a,b, fun)=> fun(a,b);


var concat = (a,b) => a + b;

var returnFunction = function(firstname, lastname){
	return greet = function(msg){
		console.log(msg + firstname + lastname);
	}
}

var result = returnFunction('vinay','kumar');
console.log(result);
result('welcome !');

//calculate("hii","hello",concat);

console.log(calculate("hello", "worls", function(a,b){
return a+b;
}));
