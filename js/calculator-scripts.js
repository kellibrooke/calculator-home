var add= function(number1, number2){
  return number1 + number2;
};

var subtract= function(number1, number2){
  return number1 - number2;
};

var multiply= function(number1, number2){
  return number1 * number2;
};

var divide= function(number1, number2){
  return number1 / number2;
};


var numInput1= parseInt(prompt("enter a number"));
var numInput2= parseInt(prompt("enter another number"));

var result= add(numInput1, numInput2);
alert(result);

result= subtract(numInput1, numInput2);
alert(result);
result= multiply(numInput1, numInput2);
alert(result);
result= divide(numInput1, numInput2);
alert(result);

var bmi = function(weight, height){
  var answer= (weight / (Math.pow(height, 2)))*703;
  return answer.toPrecision(3);
}

var weightInput= parseInt(prompt("Enter your weight in pounds."));
var heightInput= parseInt(prompt("Enter your height in inches"));

alert("Your BMI is " + bmi(weightInput, heightInput) + ".");

//weight in lbs divided by height in inches squared, times 703
