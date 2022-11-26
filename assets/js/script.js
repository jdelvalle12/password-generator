// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Functions to generate password;

var lowerCase = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passwordLength = 128;
var password = " ";

function generatePassword() {

  var generateBtn = parseInt(alert("Enter 8-128 characters, at least one symbol, one uppercase, one number, & lowercase"));
  var passwordChoice = ['lowerCase', 'upperCase', 'numbers', 'symbols', 'passwordLength'];
  

for(var i = 0 ; i < passwordLength ; i++);
(passwordChoice < 8 || passwordChoice > 128);

if (!passwordChoice) {
  alert("This needs value");
} else if {
  (passwordChoice ==='lowerCase','upperCase', 'numbers', 'symbols');  
} else if {
  (passwordChoice < 8 || passwordChoice > 128) {
    passwordChoice = parseInt(prompt('choose between 8 to 128 characters'));
  }
  console.log('Does not meet the criteria!');
 }
}
generatePassword()