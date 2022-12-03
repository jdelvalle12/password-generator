// Assignment code here

//Variables for password
var characters = ("abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789, !@#$%^&*_-+=");
var length = "text.length";
var password = " ";

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generate = document.querySelector(".btn");

// Write password to the #password input

function writePassword(password) {
  
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//Function to generate password
function generatePassword(_characters, _textlength) {
  alert("select 8-128 characters");
  var password = " ";
   for (var i = 0; i < length; i++) {

    password += writePassword() (
      Math.floor(Math.random() * text.length()));
  }
  return password;
}

// Prevent default action
function generatePassword (event) {
  event.preventDefault();
  document.querySelector("#generate-password").textContent = generate; 
}
//Call the function generatePassword to check results
generatePassword();

