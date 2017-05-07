//Defined a function named innerFunc inside a function named outerFunction
function outerFunction(innerFunction){  
	
	var innerFunc = (function(){
		console.log(innerFunction)   //inner function gets called once the outer function is invoked
	})();
	
}

outerFunction("Hello World From Inner Function") //calling the outer function by passing param in order to print the content using inner function which is inside outer function