// Assignment code here
  
 //Variables for password
var characters = ["abcdefghijklmnopqrstuvwxyz","0123456789","!@#$%^&*_-+=", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var length = "12";
var password = " ";
//Get references to the #generate element
var generateBtn = document.querySelector(".btn");

// Write password to the #password input

function writePassword() {
  
  passwordText = document.querySelector("#password")
  var password = generatePassword();

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to generate password
function generatePassword(length, characters) {
  var password = " ";
  password += characters;
  (Math.floor(Math.random() * length))
   for (var i = 0; i < length; i++) 
    return password;    
  };


//Call the function generatePassword to check results
generatePassword()

