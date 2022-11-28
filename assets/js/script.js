// Assignment code here

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Variables for password
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+="; 

//Update HTML with length, numbers, symbols, lowercase, & uppercase elements
var passwordText = document.querySelector("#password");
var length = document.querySelector("#length");
var incNumbers = document.querySelector("#numbers");
var incSymbols = document.querySelector("#symbols");
var incLowercase = document.querySelector("#lowercase");
var incUppercase = document.querySelector("#uppercase");

// Write password to the #password input

function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//Adding length value and characters 
var characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  incLowercase.checked ? (characters += lowercase) : "";
  incUppercase.checked ? (characters += uppercase) : "";
  passwordText.value = generatePassword(length.value, characters);


  
// Prevent default action
function generatePassword (e) {
  e.preventDefault;
  document.querySelector("generate password").textContent = generate; 
}

//Function to generate password
function generatePassword(length, characters) {
  var password = " ";
   for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length));
  }
  return password;
}

//Call the function generatePassword to check results
generatePassword();

