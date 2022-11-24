// Assignment code here
var characters = "abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789, @#$%^&*()";
var passwordLength = 12;
var password = " ";
console.log(characters);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordChoice = window.confirm("Enter 12 characters, symbol, one uppercase, lowercase & numeric");
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var passwordChoice = window.confirm("Enter 12 characters, symbol, one uppercase, lowercase & numeric");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 function generatePassword () {
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var symbols = '@#$%^&*()';
 
for(var i = 0 ; i < passwordLength ; i++);

if (characters === 'abcdefghijklmnopqrstuvwxyz') {
    console.log("lowercase");
   } else if (characters === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    console.log("uppercase");
   } else if (characters === '0123456789') {
    console.log("numbers");
   } else if (characters === '@#$%^&*()') {
    console.log("symbols");
   } else {
    console.log('Does not meet the criteria!');
   }
 }