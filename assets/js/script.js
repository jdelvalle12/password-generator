// Assignment code here
const generatePassword = () => {
  
 //Variables for password
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+="; 
var length = " ";

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword(password) {
  
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Adding length value and characters 


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
generatePassword()