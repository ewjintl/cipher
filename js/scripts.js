var volunteerSentence = prompt("Please enter a sentence.");

console.log(volunteerSentence);

var capitol=function() {
return volunteerSentence 
};

var twoLetter = function(){
  var firstChar = volunteerSentence.charAt(0).toUpperCase();
  var lastChar = volunteerSentence.charAt(volunteerSentence.length -1).toUpperCase();

  return firstChar + lastChar;

}

var reversal = function(string) {
  return string.split('').reverse().join('');
}


var addLetters = function( ) {
  var lastLetters = twoLetter();
  var letterBackwards = reversal(lastLetters);
  var middleLetter = volunteerSentence.charAt(Math.round((volunteerSentence.length/2) -1));

  return reversal(middleLetter + volunteerSentence + letterBackwards);
}


console.log(addLetters());


// console.log(lastChar);
// console.log(firstChar);