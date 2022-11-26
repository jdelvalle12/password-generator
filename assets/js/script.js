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
  password = generatePassword();
  document.querySelector("password").textContent = password;
//Function to generate password
//Variables to input:
var passwordChoice;
var confirmNumber;
var confirmSymbols;
var confirmUppercase;
var confirmLowercase;

//Password variable values;
var options = ['alpha', 'symbols', 'numbers']
//Alpha
var alpha = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Symbols
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")"];
//Numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Max-length of the password
var length = 128;
var password = " ";

//Convert to uppercase 
space = [];
//Choices declared outside the if statement so they can be concatenated upon condition var choice;
//Converts letters to uppercase
  var toUppercase = function (x) {
    return x.toUpperCase();
  }

//creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

function generatePassword() {

  var passwordChoice = parseInt(alert("Enter 8-128 characters, at least one symbol, one uppercase, one number, & lowercase"));

  var index = Math.floor(Math.random() * 8);
  var passwordChoice = options[index];
  

for(var i = 0 ; i < passwordLength ; i++);

if (!passwordChoice) {
  alert("This needs a value");
  return;
} else if (passwordChoice < 8 || passwordChoice > 128) {
  passwordChoice = parseInt(prompt("You must choose between 8 and 128"));
} else {
  confirmNumber = confirm("Will this containt numbers?");
  confirmSymbols = confirm("Will this contain symbols?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
};

//Else if 4 negative options
if(!confirmSymbols && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");
}
  console.log('Does not meet the criteria!');
}
generatePassword()