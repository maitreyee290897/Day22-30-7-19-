var returnFunction = function(firstName, lastName){
	var greetFun = function(){
		console.log('hi!' + firstName + ' ' + lastName);
	}
	return greetFun;
}

var result = returnFunction('vinay', 'kumar');
//console.log(result);
result()
