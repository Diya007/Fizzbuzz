// count through number 1 to 100, figure out each one if it is divisble by 3, 5 or both;
for (var i = 1; i<= 100; i++) {
	//for each number, if it is divisble by 3;and see if it is also divisble by 5, if so
	// print Fizzbuzz
	//if it's only divisble by 3, print Fizz;
	if (i%3 === 0) {
		if(i%5 === 0){
			console.log("Fizzbuzz");
		}

		else {
			console.log('Fizz');
		}
	}
	// if it divisble by 5, print Buzz;
	else if(i%5 === 0) {
		console.log("Buzz");
	}
	// if it is not divisble by 3 and 5, print number itself;
	else{
		console.log(i);
	}
};