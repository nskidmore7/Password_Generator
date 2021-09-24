var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var confirmNumber
var confirmLowercase
var confirmUppercase
var confirmSymbol
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowerCase = "abcdefghijklmnopqrstuvwxyz";
number = "1234567890";
symbol = "!@#$%^&*()";

var choices;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  enter = parseInt(prompt("Choose between 8-128 characters for your password"));
  if (!enter) {
      alert("You must choose between 8 and 128");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {

      confirmNumber = confirm("Will this contain numbers?");
      confirmSymbol = confirm("Will this contain symbols?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose an option!");

  }

  else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = symbol.concat(number, lowerCase, upperCase);
  }

  else if (confirmSymbol && confirmNumber && confirmUppercase) {
      choices = symbol.concat(number, upperCase);
  }
  else if (confirmSymbol && confirmNumber && confirmLowercase) {
      choices = symbol.concat(number, lowerCase);
  }
  else if (confirmSymbol && confirmLowercase && confirmUppercase) {
      choices = symbol.concat(lowerCase, upperCase);
  }
  else if (confirmSymbol && confirmLowercase && confirmUppercase) {
      choices = number.concat(lowerCase, upperCase);
  }
 
  else if (confirmSymbol && confirmNumber) {
      choices = symbol.concat(number);

  } else if (confirmSymbol && confirmLowercase) {
      choices = symbol.concat(lowerCase);

  } else if (confirmSymbol && confirmUppercase) {
      choices = symbol.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowerCase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowerCase.concat(upperCase);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(upperCase);
  }

  else if (confirmSymbol) {
      choices = symbol;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = lowerCase;
  }

  else if (confirmUppercase) {
      choices = space.concat(upperCase);
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }

  var password = password.join("");
  UserInput(password);
  return password;
}

function UserInput(password) {
  document.getElementById("password").textContent = password;

}
