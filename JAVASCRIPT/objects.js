var dishes = [
{
	id: 34,
	'dish-name': 'masala dosa',
	price: 40
},
{
	id:35,
	'dish-name':'idli-vada',
	price:45
}
]
//console.log(dishes[0].price);

let printDishName = function(allDishes){
	console.log(' arguments ');
	console.log(arguments);
	for(var index = 0;index<dishes.length;index++){
	console.log(dishes[index]['dish-name']);
}
	
}
printDishName(dishes);
