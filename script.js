
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerchar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+-=[{]}\|;:'";
var finalChar = "";



function generatePassword() {
 var generatedPassword = "";
 // Initial prompt for character count 
  var promptChar = window.prompt("Please choose number of charcters. 8 - 128");
  // If not a number entered 
  if(isNaN(length)){
    alert("Please choose a number");
    return generatePassword()
  }
  // If number is lower than 8 or greater than 128
  if(promptChar<8 || promptChar> 128){
    alert("Please choose numbers between 8 - 128");
    return generatePassword()
  }
  // Password options Prompts 
  var hasUpper = window.confirm("Would you like upper case letters?");
  var hasLower = window.confirm("Would you like lower case letters?");
  var hasNumbers = window.confirm("Would you like numbers?");
  var hasSpecial = window.confirm("Would you like special characters?");
  // If all options were skipped 
  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("Minimum of 1 character type must be chosen");
    return generatePassword()
  }
  
  if(hasUpper){
    finalChar += upperChar
  }
  if(hasLower){
    finalChar += lowerchar
  }

  if(hasNumbers) {
    finalChar += numberChar
  }

  if(hasSpecial) {
    finalChar += specialChar
  }
// password gen 
for (var i = 0; i < promptChar; i++) {
  generatedPassword += finalChar.charAt(Math.floor(Math.random() * finalChar.length));
}
return generatedPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
