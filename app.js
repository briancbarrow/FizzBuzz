$(document).ready(function() {
var userInput = +prompt('What number would you like to count to');
console.log(typeof userInput)

  function fizzy(number) {
    if(number % 3 === 0) {
      return true;
    } else {
      return false;
    };
  };

  function buzzy(number) {
    if(number % 5 === 0) {
      return true;
    } else {
      return false;
    };
  };

  function fizzBuzz(number) {
    parseInt(number);

    for(var i = 1; i <= number; i++) {      
      if(buzzy(i) && fizzy(i)) {
        $('.output').append('<p>FizzBuzz</p>');
      } else if(buzzy(i)) {
          $('.output').append('<p>Buzz</p>');
      } else if(fizzy(i)) {
        $('.output').append('<p>Fizz</p>');
      } else {
        $('.output').append('<p>' + i + '</p>');
      };
    };
  };

  while (userInput % 1 != 0) {
      alert('Please provide a number with no decimals');
      userInput = +prompt('What number would you like to count to');
    } 
    fizzBuzz(userInput);
});