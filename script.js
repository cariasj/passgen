// Assignment code here

function generatePassword() {
// Prompts user to choose character length
var promptCharacter = window.prompt(" Please choose between 8 - 128 characters.");
// Converts the value into number
promptCharacter = parseInt(promptCharacter);

// validate prompt answer
/* if (promptCharacter === "" || promptCharacter === null) {
  window.alert("You need to provide a valid answer! Please try again.");
  // use return to call it again and stop the rest of this function from running
  return generatePassword();
} */

// if proper values imputted then proceeds towards next parameters
if (promptCharacter <= 128 && promptCharacter >= 8) {
  characterTypes();
  
}

  // Checks to see if a numeric value was entered
  else (isNaN(promptCharacter)); {
    window.alert("Please enter a numeric value between 8-128.");
    // use return to call it again and stop the rest of this function from running
    return generatePassword();
  }
 
};

function characterTypes(){
  

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
