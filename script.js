//create variables to hold the character options for special, lowercase, uppsercase, numeric character

// create an empty array that will hold the users selected characters

//varpossibleChars = []
//varpasswordArray

// on game start prompt for users number of character and hold in a variable
// var numChars = prompt(How many characters in your password)

//check users input and confirm they are between ...

//function valudateUserInput(chars)
// if (chars < 8 || chars > 128) {
//  return null
//}
//}

//after validation create variables for character selections

// var specialNums = confirm("would you like ...")

//validate that at least one option was selected

// if (!specialNums && !numericalNums && ...) {
  // alert("You need to select at least one type of character")
  //return generatePassword()
//}

//after validation is complete start pushing the selected characters into possible chars array

// if (specialChars) { //do for all special elements
  //possibleChars.concat(specialCharsArray)
//}

//randomly create a number

// loop through possibleChars and select a random character from possibleChars array based on how many characters they entered into the prompt

//add randomly selected generated character to emoty array called passwordArray

//return passwordArray.join()


function validateUserInput(chars){
 if (chars < 8 || chars > 128) {
 alert("Please choose a value within the given range")
  return generatePassword();
}
}


// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
var possChars = [];
var newPassword = [];


if ((generateBtn.click()) == true) {
  generatePassword();
}

function generatePassword() {
  
  var passwordLength = (window.prompt("Choose a password length \n(min:8 characters max:128 characters", ""));
  console.log(passwordLength);
  validateUserInput(passwordLength);
  
  //ask user for special charater
  var userChar = (window.confirm ("Please select at least one special character."));
  
  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  if (userChar == true) {
    var userLower = (window.confirm("LowerCase? (Y/N)"));
    var userUpper = (window.confirm("UpperCase? (Y/N)"));
    var userNumeric = (window.confirm("Numeric? (Y/N)"));
    var userSpecial = (window.confirm("Special? (Y/N)")); 
  }
  //validate that at least one option was selected
 if (!userLower && !userUpper && !userNumeric && !userSpecial) {
  alert("You need to select at least one type of character")
  return generatePassword()
}

//concat the password options .toLowerCase( .toUpperCase()

if (userLower) { 
  possChars = possChars.concat(lettersLower);
}
if (userUpper) { 
  possChars = possChars.concat(lettersUpper);
}
if (userNumeric) { 
  possChars = possChars.concat(numbers);
}
if (userSpecial) { 
  possChars = possChars.concat(symbols);
}
console.log(possChars);

//generate random value
//loop through possible chars to fill password based on user length

for (i=0; i < passwordLength; i++) {
  // generate random number between 1 and length of possible chars array
  var randomNum = Math.floor(Math.random()*possChars.length);
  newPassword.push(possChars[randomNum]);
}

return newPassword.join("");
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













//return finishedPassword



/* 



if (document.querySelectorAll("generate").click()) {
  generatePassword();
  }

  var event = "";
document.onclick = generatePassword() {
  if (event ===undefined) event= window.event;
}

*/
