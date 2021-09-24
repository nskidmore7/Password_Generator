# Password_Generator
Homework 3

This is a random password generator that will create a password using symbols, numbers, lowercase letters, and uppercase letters that will be between 8-128 characters. The user will be able to choose how many characters they would like as long as it is within the range listed. They will also be able to decide which of the four types of characters they would like to use in any combination. 


var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var confirmNumber
var confirmLowercase
var confirmUppercase
var confirmSymbol

These are the variables that we will be using to allow us to create the function that will create the password.

upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowerCase = "abcdefghijklmnopqrstuvwxyz";
number = "1234567890";
symbol = "!@#$%^&*()";

These are the characters that will be used in the creation of the password. 

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

This the start of our function that will determine how many characters we will use in the password and get responses in the prompts about which type of characters we will be using. The user will type a number in the text box, and if the user doesn't select a number within the acceptable range they will receive an error message and ask them to choose a number within the proper range. Then the user will go through and choose whether or not they want to use the specific types of characters. The responses will be recorded in the system, and used in the function to help create the password. 

else if (confirmSymbol && confirmNumber && confirmUppercase) {
      choices = symbol.concat(number, upperCase);
  }
  else if (confirmSymbol && confirmNumber && confirmLowercase) {
      choices = symbol.concat(number, lowerCase);
  }

This is an example of our function using the user's selections to create the password. We have to use a lot if else statements because of the many different possibilities of answers that the user can provide. They take each of the types of characters the user wants to use, and combines then in an array using the concat method so each the characters can randomly be chosen in our for loop provided below:

for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }

This loop will take the variables, and randomly choose points in the combined array provided from the concat method in the above if else statements. It will choose a random character until it hits the number of characters the user needs. 


The random password generator can be found at: https://nskidmore7.github.io/Password_Generator/

