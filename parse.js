var num1 = '57';
var num2 = '34.9899';
// num1 *= num2
var numInt1 = parseInt(num1);
var numFloat2 = parseFloat(num2);
console.log(numInt1);
console.log('numFloat2 :', numFloat2);
var multiplication = numInt1 * numFloat2;
console.log('multiplication :', multiplication);
var multiplicationFixed = multiplication.toFixed(2);
console.log('multiplicationFixed :', multiplicationFixed);
console.log(parseFloat(multiplicationFixed))


