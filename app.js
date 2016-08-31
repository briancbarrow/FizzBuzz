$(document).ready(function() {
  console.log('ready');
  //var fizz = false;
  //var buzz = false;
  function fizzy(number) {
    //fizz = false;
    if(number % 3 === 0) {
      //fizz = true;
      return true;
    } else {
      return false;
    };
  };

  function buzzy(number) {
    //buzz = false;
    if(number % 5 === 0) {
      //fizz = true;
      console.log(number)
      return true;
    } else {
      return false;
    };
  };

  function fizzBuzz(number) {
    console.log('running');
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

  fizzBuzz(100);
});