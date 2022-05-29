// Assignment Code

//getting button from the html using class id
let generateBtn = document.querySelector('#generate');
let copyBtn = document.querySelector('#copy');
let characterSet = [];

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

function copyPassword() {
  let copyText = document.querySelector('#password')
;
  copyText.select();
  document.execCommand('copy');
  alert('Copy capisced!');
}


// generateBtn (object. html).addEventListener (object method)('click', dialogueBox);
generateBtn.addEventListener('click', writePassword);
copyBtn.addEventListener('click', copyPassword);


// overall function to generate password
function generatePassword() {
  let lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specials = ['~', '!', '@', '%', '#', '$', '&', '?'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // prompt user for password length
  let length = getLength();
  let password = "";

  // Ask user if they want to use lowercase letters
  if (confirm("Use lowercase letters?")) {
    // Add lowercase letters to character set
    for (let i = 0; i < lowers.length; i++) {
      characterSet.push(lowers[i]);
    }
  }

  // Ask user if they want to use uppercase letters
  if (confirm("Use uppercase letters?")) {
    // Add uppercase letters to character set
    for (let i = 0; i < uppers.length; i++) {
      characterSet.push(uppers[i]);
    }
  }

  // Ask user if they want to use special characters
  if (confirm("Use special characters?")) {
    // Add specials to character set
    for (let i = 0; i < specials.length; i++) {
      characterSet.push(specials[i]);
    }
  }

  // Ask user if they want to use numbers
  if (confirm("Use numbers?")) {
    for (let i = 0; i < numbers.length; i++) {
      characterSet.push(numbers[i]);
    }
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInt(characterSet.length);
    password += characterSet[randomIndex];
  }
  console.log(password);
  return password;
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// Prompt user for password length? (between 8 and 128 characters)
function getLength() {
  let length = prompt("length of password", "enter 8-128");

  length = parseInt(length);
  if (length > 128 || length < 8 || isNaN(length)) {
    alert("enter a valid number");
    getLength();
  } else {
    return length;
  };
}

