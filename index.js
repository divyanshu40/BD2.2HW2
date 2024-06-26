let express = require("express");
let app = express();
let PORT = 3000;
app.listen(PORT, () => {
  console.log("This server is running");
});

// Exercise 1: Filter Prime Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function filterPrimeNumbers(number) {
  for (let i = 2; i <= number; i++) {
    if (number > 1 && number % i != 0) {
      return true;
    } else {
      return false;
    }
  }
}
app.get("/prime-numbers", (req, res) => {
  let result = numbers.filter((number) => filterPrimeNumbers(number));
  res.json(result);
});
// Exercise 2: Filter Positive Numbers
let numbersArray = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterPositiveNumbers(number) {
  return number > 0;
}
app.get("/positive-numbers", (req, res) => {
  let result = numbersArray.filter((number) => filterPositiveNumbers(number));
  res.json(result);
});
// Exercise 3: Filter Negative Numbers
let arrayOfNumbers =  [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function filterNegativeNumbers(number) {
  return number < 0;
}
app.get("/negative-numbers", (req, res) => {
let result = arrayOfNumbers.filter((number) => filterNegativeNumbers(number));
  res.json(result);
});
// Exercise 4: Filter Odd Numbers
let array =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function filterOddNumbers(number) {
  return number % 2 != 0;
}
app.get("/odd-numbers", (req, res) => {
  let result = array.filter((number) => filterOddNumbers(number));
  res.json(result);
});
// Exercise 5: Filter Numbers Greater Than a Given Value
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function filterNumbersGreaterThan(number, value) {
  return number > value;
}
app.get("/numbers-greater-than", (req, res) => {
  let value = parseFloat(req.query.value);
  let result = data.filter((number) => filterNumbersGreaterThan(number, value))
  res.json(result);
});
// Exercise 6: Filter Numbers Less Than a Given Value
givenArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function filterNumbersLessThan(number, value) {
  return number < value;
}
app.get("/numbers-less-than", (req, res) => {
  let value = parseFloat(req.query.value);
  let result = givenArray.filter((number) => filterNumbersLessThan(number, value));
  res.json(result);
});