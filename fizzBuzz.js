
var counter = 1;
while (counter < 101){
  if (counter % 5 === 0 && counter % 3 === 0 ) {
    console.log("FizzBuzz");
  }
  else if (counter % 3 === 0) {
    console.log("Fizz");
  }
  else if (counter % 5 === 0) {
    console.log("Buzz");
  }
  console.log(counter);
  counter += 1;
}
