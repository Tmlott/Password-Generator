// Assignment code here
function generatePassword() {
    //variable that stores the password lengths
    var passlength = ""
    var numOfChars = prompt("How many characters would you like your password to have?");
    while (((numOfChars < 8) && (numOfChars)) || (numOfChars > 128)) {
        if (numOfChars < 8)
            alert("Password must be at least 8 characters.");
      if (numOfChars > 128)
            alert("Password must be no more than 128 characters.");
      numOfChars = prompt("How many characters would you like your password to have ? ")
    }
    //variable that stores the character type
    //variable that stores the character type
    var charType = []
    var lowerCaseLet = confirm("Click 'OK' to use lowercase letters.")
    var upperCaseLet = confirm("Click 'OK' to use uppercase letters.")
    var numbers = confirm("Click 'OK' to use numbers.")
    var specialChar = confirm("Click 'OK' to use special characters.")
    //var lowerCharType = 'abcdefghijklmnopqrstuvwxyz'
    //var upperCharType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //var numberCharType = '0123456789'
    //var specialCharType = "!@#$%&*()_+-=[]|,./?><"
    if (lowerCaseLet === true) {
        charType.push('abcdefghijklmnopqrstuvwxyz'); 
    }
    if (upperCaseLet === true) {
        charType.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); 
    }
    if (numbers === true) {
        charType.push('0123456789'); 
    }
    if (specialChar === true) {
        charType.push("!@#$%&* ()_ +-=[] |,./?>< "); 
    }
    for (let i = 0; i < numOfChars; i++) {
        var randomNum = Math.floor(Math.random() * (charType.length))
        var randomChar = Math.floor(Math.random() * (charType[randomNum].length));
        passlength = passlength + charType[randomNum][randomChar]
    }
    return passlength
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