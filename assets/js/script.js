// Assignment code here
var generateBtn = document.querySelector("#generate-btn");
var passwordText = document.querySelector("#password");
  
 //Variables for password
var characters = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "!@#$%^&*_-+=",
];

var length = 12;
var password = " ";

//Get references to the #generate element

// Write password to the #password input

function writePassword() {
  
  var password = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
 event.preventDefault(); 
 var password = document.querySelector("#password").textContent = " "; 
});  



//Function to generate password
function generatePassword(characters, length) {
  alert("select 12 characters");
  var password = " ";
   for (var i = 0; i < length; i++) {

    password += writePassword(characters) (
      Math.floor(Math.random() * text.length()));
  }
  return password;
}

//Call the function generatePassword to check results
writePassword();
generatePassword();