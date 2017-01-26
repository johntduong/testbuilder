// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  if ( (cardNumber.slice(0,4) === '4903' || cardNumber.slice(0,4) === '4905' || cardNumber.slice(0,4) === '4911' || cardNumber.slice(0,4) === '4936' || cardNumber.slice(0,6) === '564182'
  || cardNumber.slice(0,6) === '633110' || cardNumber.slice(0,4) === '6333' || cardNumber.slice(0,4) === '6759') && (cardNumber.length===16 || cardNumber.length===18 || cardNumber.length===19)) {
    return 'Switch';
  }
  else if (cardNumber[0]==='4' && (cardNumber.length===13 || cardNumber.length===16 || cardNumber.length===19)) {
    return 'Visa';
  }
  else if ((cardNumber.slice(0,4)==='6011' || cardNumber.slice(0,3)==='644' || cardNumber.slice(0,3)==='645' || cardNumber.slice(0,3)==='646' || cardNumber.slice(0,3)==='647' || cardNumber.slice(0,3)==='648'
  || cardNumber.slice(0,3)==='649' || cardNumber.slice(0,2)==='65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }
  else if ((cardNumber.slice(0,4)==='5018' || cardNumber.slice(0,4)==='5020' || cardNumber.slice(0,4)==='5038' || cardNumber.slice(0,4)==='6304') && (cardNumber.length > 11 && cardNumber.length < 20)) {
    return 'Maestro';
  }
  else if (parseInt(cardNumber.slice(0,2)) > 50 && parseInt(cardNumber.slice(0,2)) < 56 && cardNumber.length===16) {
    return 'MasterCard';
  }
  else if (cardNumber[1]==='8' || cardNumber[1]==='9' && cardNumber.length===14) {
    return 'Diner\'s Club';
  }
  else if (cardNumber[1]==='4' || cardNumber[1]==='7' && cardNumber.length===15) {
    return 'American Express';
  }
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  else if ( (parseInt(cardNumber.slice(0,6)) > 622125 && parseInt(cardNumber.slice(0,6)) < 622926) || (parseInt(cardNumber.slice(0,3)) > 623 && parseInt(cardNumber.slice(0,3)) < 627) || (parseInt(cardNumber.slice(0,4)) > 6281
   && parseInt(cardNumber.slice(0,4)) < 6289) && (cardNumber.length > 15 && cardNumber.length < 20) ) {
    return 'China UnionPay';
  }
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
};
