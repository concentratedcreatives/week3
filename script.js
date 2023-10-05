var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Function to determine the length of the password.
function determineLength() {
  while (true) {
    passwordLength = prompt("Please specify the desired length of your password (anywhere from 8 to 128 characters): ");

    if (passwordLength >= 8 && passwordLength <= 1280 && !isNaN(passwordLength)) {
      break;
    } else {
      alert("Password length must be between 8 and 128 characters.");
    }
  }
}

// Functions to determine character types.
function determineUppercase() {
  uppercaseCheck = confirm("Do you want to include uppercase letters in your password?");
}

function determineNumbers() {
  numberCheck = confirm("Do you want to include numbers in your password?");
}

function determineSpecial() {
  specialCheck = confirm("Do you want to include special characters in your password?");
}

// Function to generate the password.
function generatePassword() {
  determineLength();
  determineUppercase();
  determineNumbers();
  determineSpecial();

  var characters = lowercaseChar;
  var password = "";

  if (uppercaseCheck) {
    characters += uppercaseChar;
  }
  if (numberCheck) {
    characters += numberChar;
  }
  if (specialCheck) {
    characters += specialChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Function to write password to the #password input.
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}

// Function to reset the password field.
function resetText() {
  document.getElementById("password").value = "Your Secure Password";
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);