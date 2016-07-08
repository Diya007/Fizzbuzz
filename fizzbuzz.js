


 function checkNum(newNumber) {
	var newNumber = prompt("Please enter a number,from 1 to 100")
	var number = parseInt(newNumber)
	for(var i = 1; i <= number; i++) {

		if (i%3 === 0) {
			if(i%5 === 0){
				$('.output').append("Fizzbuzz<br>");
			}
			else {
				$('.output').append('Fizz<br>');
			}
		}
		// if it divisble by 5, print Buzz;
		else if(i%5 === 0) {
			$('.output').append("Buzz<br>");
		}
		// if it is not divisble by 3 and 5, print number itself;
		else{
			$('.output').append(i+"<br>");
		}	
	}
	
}
checkNum();



	


