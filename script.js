// Assignment code here

var randompass = { 
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  
};

var randomLower =
   String.fromCharCode(Math.floor(Math.random() *26)+ 97 );


var randomUpper =
  String.fromCharCode(Math.floor(Math.random() *26)+ 65 );

var randomNumber =
  String.fromCharCode(Math.floor(Math.random() *10)+ 48 );









function generatePassword() {
  promptCharacter();
};



// Prompts user to choose character length
function promptCharacter() {
var promptChar = window.prompt(" Please choose between 8 - 128 characters.");
// Converts the value into number
promptChar = parseInt(promptChar);
// if proper values imputted then proceeds towards next parameters
if (promptChar <= 128 && promptChar >= 8) {
  characterLower(promptChar); 
}
  // Checks to see if a numeric value was entered
  else (isNaN(promptCharacter)); {
    window.alert("Please enter a numeric value between 8-128.");
    return generatePassword();
  }
  
};

// Function to choose owercase
function characterLower(randomLower) {
  
  var charLow = window.confirm("Would you like LowerCase letters?");
  if (charLow) {  
    characterUpper(randomLower);   
  } else {
    window.alert("No lowercase selected");
    characterUpper();
  }  
};

// Function to choose ppercase
function characterUpper(randomUpper) {
  var charUpp = window.confirm("Would you like UpperCase letters?");
  if (charUpp) {
    characterNumber(randomUpper);
  } else {
    window.alert("No Uppercase selected");
    characterNumber();
  }
  console.log(characterNumber);
};

// Function to choose numbers
function characterNumber(randomNumber) {
  var charNum = window.confirm("Would you like Numbers?");
  if (charNum) {
    characterSpecial(randomNumber);
  } else {
    window.alert("No Numbers selected");
    characterSpecial();
  }
};

// Function to choose special characters
function characterSpecial(randomsymbol) {
  var charSpec = window.confirm("Would you like Special Characters?");
  if (charSpec) {
    generatedPassword(randomsymbol);
  } else {
    window.alert("No Special Charcters selected");
    generatedPassword();
  }
};








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
