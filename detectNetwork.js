// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  if(cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39' && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if(cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37' && cardNumber.length === 15){
    return 'American Express';
  } else if((cardNumber.slice(0,4) === '4903' || cardNumber.slice(0,4) === '4905' || cardNumber.slice(0,4) === '4911' || cardNumber.slice(0,4) === '4936' || cardNumber.slice(0,6) === '564182' || cardNumber.slice(0,6) === '633110' || cardNumber.slice(0,4) === '6333' || cardNumber.slice(0,4) === '6759') && (cardNumber.length === 18 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Switch';
  } else if(cardNumber.slice(0,1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  } else if((cardNumber.slice(0,2) === '51' || cardNumber.slice(0,2) === '52' || cardNumber.slice(0,2) === '53' || cardNumber.slice(0,2) === '54' || cardNumber.slice(0,2) === '55') && cardNumber.length === 16) {
    return 'MasterCard';
  } else if((cardNumber.slice(0,4) === '6011' || (parseInt(cardNumber.slice(0,3)) > 643 && parseInt(cardNumber.slice(0,3)) < 650) || cardNumber.slice(0,2) === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  } else if((cardNumber.slice(0,4) === '5018' || cardNumber.slice(0,4) === '5020' || cardNumber.slice(0,4) === '5038' || cardNumber.slice(0,4) === '6304') && (cardNumber.length > 11 && cardNumber.length < 20)) {
    return 'Maestro';
  } else if(((parseInt(cardNumber.slice(0,6)) > 622125 && parseInt(cardNumber.slice(0,6)) < 622926) || (parseInt(cardNumber.slice(0,3)) > 623 && parseInt(cardNumber.slice(0,3)) < 627) || (parseInt(cardNumber.slice(0,4)) > 6281 && parseInt(cardNumber.slice(0,4)) < 6289)) && (cardNumber.length > 15 && cardNumber.length < 20)) {
    return 'China UnionPay';
  } else {
  	return 'invalid number';
  }
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

detectNetwork('38345678901234');
detectNetwork('39345678901234');
detectNetwork('343456789012345');
detectNetwork('373456789012345');
detectNetwork('38345678901234');
detectNetwork('39345678901234');
detectNetwork('343456789012345');
detectNetwork('4123456789012');
detectNetwork('4123456789012345');
detectNetwork('4123456789012345678');
detectNetwork('5112345678901234');
detectNetwork('5212345678901234');
detectNetwork('5312345678901234');
detectNetwork('5412345678901234');
detectNetwork('5512345678901234');
detectNetwork('6011345678901234');
detectNetwork('6011345678901234567');
detectNetwork('5018345678901234567');

console.log(detectNetwork('6288100000000000000'));
console.log(detectNetwork('6241000000000000000'));



