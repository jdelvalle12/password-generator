// Assignment code here
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()";
var numbers = "0123456789";
var passwordLength = 8;
var password = "";

//Array of options
var options = ["alpha" , "symbols" , "numbers"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  for (var i = 0 ; i <= passwordLength ; i++) {
    console.log(password [x]); 
    var index = Math.floor(Math.random() * characters.length());
    password += characters.substring(index , index +1);
        document.querySelecter("#password").value = password;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
  let characters = alpha;
  numbers.checked ? (characters += numbers) : "";
  symbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
};