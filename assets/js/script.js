// Assignment code here
var generateBtn = document.querySelector("#generate");
// Get references to the #generate element

var characters = "abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789, @#$%^&*()";
var passwordLength = 12;
var password = " ";

console.log(characters, passwordLength, password);

var passwordChoice = window.alert("Enter at least 8-128 characters, a symbol, one uppercase, lowercase & number");

var index = Math.floor(Math.random() * passwordLength);
var computerChoice = characters[index];
// Write password to the #password input

function writePassword() {

  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  

  passwordText.value = password;
  
}

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '@#$%^&*()';

function generatePassword () {

for(var i = 0 ; i < passwordLength ; i++);

if (characters ==='abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789, @#$%^&*()' && passwordChoice === 'abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789, @#$%^&*()') {
  windows.alert('Password Accepted!');
  console.log("Password accepted!");
} else if (characters === 'abcdefghijklmnopqrstuvwxyz') {
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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passwordText.addEventListener("click", generatePassword);