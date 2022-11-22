// Assignment code here
var alphaLowerCase = "abcdefghijklmnopqrstuvwxyz";
var alphaUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = 0123456789;
var symbols = "!@#$%^&*()";
var passwordLength = 8;
var password = " ";

// Get references to the #generate element
var generateBtn = document.querySelector("generate");
var passwordChoice = window.prompt("Enter 8 characters, symbol, one uppercase, lowercase & numeric");
// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("password");

  for(var i = 0 ; i < passwordLength ; i++) {
    if(alpha) {
      generatePassword +
    }
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  let passwordText.value 
  result.value = generatePassword (alpha, numbers, symbols);