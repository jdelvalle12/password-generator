// Assignment code here
  
 //Variables for password
 var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var numbers = ['0','1','2','3','4','5','6','7','8','9'];
 var symbols = ['!','@','#','$','%','^','&','*','_','-','+','='];
 var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 
 //var password = " ";
 //Get references to the #generate element
 var generateBtn = document.querySelector(".btn");
 
//options and must have to to generate a password 
function passwordOptions() {
  var length = parseInt(prompt('How long you want your password to be? Must be 8-128'))

  var hasLowerCase = confirm ('Click ok to confirm including lowercase.');

  var hasNumbers = confirm ('Click Ok to confirm including numbers');

  var hasSymbols = confirm('Click Ok to confirm including symbols');

  var hasUpperCase = confirm('Click Ok to confirm including uppercase');

  if (
    hasLowerCase === false && 
    hasNumbers === false &&
    hasSymbols === false &&
    hasUpperCase === false
  ) {
    alert('Must choose at least one option to include');
    return null;
  }
  var chosenOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasSymbols: hasSymbols,
    hasUpperCase: hasUpperCase,
  }
  return chosenOptions;
}

function randomCharacters(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)

  var randomElement = arr[randomIndex];
  return randomElement;
}
//Created a function to generate a password to combine & trim characters to get the final password
 function generatePassword() {
  var options = passwordOptions()
  var finalPassword = [];
  var combineCharacters = [];
  var trimmedCharacters = [];
//conditional statements to concat and push characters to generate a combination of lowercase, numbers, symbols, & uppercase
  if (options.hasLowerCase) {
    combineCharacters = combineCharacters.concat(lowerCase);
    trimmedCharacters.push(randomCharacters(lowerCase));
  }
  if (options.hasNumbers) {
    combineCharacters = combineCharacters.concat(numbers);
    trimmedCharacters.push(randomCharacters(numbers));
  }
  if (options.hasSymbols) {
    combineCharacters = combineCharacters.concat(symbols);
    trimmedCharacters.push(randomCharacters(symbols));
  }
  if (options.hasUpperCase) {
    combineCharacters = combineCharacters.concat(upperCase);
    trimmedCharacters.push(randomCharacters(upperCase));
  }
  for(var i = 0; i < options.length; i++) {
    var combineRandom = randomCharacters(combineCharacters);
    finalPassword.push(combineRandom)
  }
  for(var i = 0; i < trimmedCharacters.length; i++) {
    finalPassword[i] = trimmedCharacters[i];
  }
  //return to join the variables to generate passwords 
    return finalPassword.join('');    
  };

 // Write password to the #password input
 function writePassword() {
   
   passwordText = document.querySelector("#password")
   var password = generatePassword();
 
   passwordText.value = password;
   
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 
 
 
 
 
 