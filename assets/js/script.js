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

// Else if for 4 negative options
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");

}
// First if statement that uses user input prompts to determine choices
// Else if for 4 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  choices = character.concat(number, alpha, alpha2);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alpha2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alpha, alpha2);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
  choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
// Else if for 1 positive option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};

// password variable is an array placeholder for user generated amount of length
var password = [];

// Start random selection variables:
// Random selection for all variables: 
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
// This joins the password array and converts it to a string
// Worked with a tutor to incorporate this option
var ps = password.join("");
UserInput(ps);
return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
document.getElementById("password").textContent = ps;

}
  console.log('Does not meet the criteria!');
}
generatePassword()