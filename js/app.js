// variable list

// dropdown list var
let fromList = document.querySelector('select[name="fromList"]');
let toList = document.querySelector('select[name="toList"]');
let switchList = document.querySelector("#switch");

// dropdown options (from) var
let f_decimal = document.querySelector(".f_decimal");
let f_binary = document.querySelector(".f_binary");
let f_octal = document.querySelector(".f_octal");
let f_hexa = document.querySelector(".f_hexa");
let f_roman = document.querySelector(".f_roman");
let f_text = document.querySelector(".f_text");
let f_ascii = document.querySelector(".f_ascii");

// dropdown options (to) var
let t_decimal = document.querySelector(".t_decimal");
let t_binary = document.querySelector(".t_binary");
let t_octal = document.querySelector(".t_octal");
let t_hexa = document.querySelector(".t_hexa");
let t_roman = document.querySelector(".t_roman");
let t_text = document.querySelector(".t_text");
let t_ascii = document.querySelector(".t_ascii");

// optional output last 3 output box's div
let optionalOutput = document.querySelector("#optionalOutput");
// optional output five
let optionalOutputFive = document.querySelector(".optionalOutputFive");

// html title of the input and output
let fromTitle = document.querySelector("#fromTitle");
let toTitleOne = document.querySelector("#toTitleOne");
let toTitleTwo = document.querySelector("#toTitleTwo");
let toTitleThree = document.querySelector("#toTitleThree");
let toTitleFour = document.querySelector("#toTitleFour");
let toTitleFive = document.querySelector("#toTitleFive");

// input and all output boxes
let userInput = document.querySelector("#userInput");
let botOutputOne = document.querySelector("#botOutputOne");
let botOutputTwo = document.querySelector("#botOutputTwo");
let botOutputThree = document.querySelector("#botOutputThree");
let botOutputFour = document.querySelector("#botOutputFour");
let botOutputFive = document.querySelector("#botOutputFive");

// convert and reset buttons
let convertTo = document.querySelector("#convertTo");
let resetBtn = document.querySelector("#reset");

//
//
//

function clearInputOutputBoxes() {
  userInput.value = "";
  botOutputOne.value = "";
  botOutputTwo.value = "";
  botOutputThree.value = "";
  botOutputFour.value = "";
  botOutputFive.value = "";
}

function switchFromList() {
  t_decimal.style.display = "block";
  t_binary.style.display = "block";
  t_octal.style.display = "block";
  t_hexa.style.display = "block";
  t_roman.style.display = "block";
  t_text.style.display = "block";
  t_ascii.style.display = "block";
  userInput.placeholder = "Enter your input here";

  if (fromList.value === "decimal") {
    t_decimal.style.display = "none";
    fromTitle.innerText = "Enter the Decimal number";
    userInput.placeholder = "Enter your decimal number";
  } else if (fromList.value === "binary") {
    t_binary.style.display = "none";
    fromTitle.innerText = "Enter the Binary number";
    userInput.placeholder = "Enter your binary number";
  } else if (fromList.value === "octal") {
    t_octal.style.display = "none";
    fromTitle.innerText = "Enter the Octal number";
    userInput.placeholder = "Enter your octal number";
  } else if (fromList.value === "hexa") {
    t_hexa.style.display = "none";
    fromTitle.innerText = "Enter the Hexadecimal number";
    userInput.placeholder = "Enter your hexadecimal number";
  } else if (fromList.value === "roman") {
    t_roman.style.display = "none";
    fromTitle.innerText = "Enter the Roman number";
    userInput.placeholder = "Enter your roman number";
  } else if (fromList.value === "text") {
    t_text.style.display = "none";
    fromTitle.innerText = "Enter the Text";
    userInput.placeholder = "Enter your text";
  } else if (fromList.value === "ascii") {
    t_ascii.style.display = "none";
    fromTitle.innerText = "Enter the ASCII number";
    userInput.placeholder = "Enter your ascii number";
  }
}

function switchToList() {
  f_decimal.style.display = "block";
  f_binary.style.display = "block";
  f_octal.style.display = "block";
  f_hexa.style.display = "block";
  f_roman.style.display = "block";
  f_text.style.display = "block";
  f_ascii.style.display = "block";

  if (toList.value === "decimal") {
    f_decimal.style.display = "none";
  } else if (toList.value === "binary") {
    f_binary.style.display = "none";
  } else if (toList.value === "octal") {
    f_octal.style.display = "none";
  } else if (toList.value === "hexa") {
    f_hexa.style.display = "none";
  } else if (toList.value === "roman") {
    f_roman.style.display = "none";
  } else if (toList.value === "text") {
    f_text.style.display = "none";
  } else if (toList.value === "ascii") {
    f_ascii.style.display = "none";
  }
}

function changeToTitle() {
  if (fromList.value === "selectOne" || toList.value === "selectOne") {
    toTitleOne.innerText = "Select an option from above";
    toTitleTwo.innerText = "Select an option from above";
    toTitleThree.innerText = "Select an option from above";
    toTitleFour.innerText = "Select an option from above";
  }
  //
  else if (fromList.value === "decimal" && toList.value === "binary") {
    toTitleOne.innerText = "The Binary number is:";
    toTitleTwo.innerText = "The Octal number is:";
    toTitleThree.innerText = "The Hexadecimal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "decimal" && toList.value === "octal") {
    toTitleOne.innerText = "The Octal number is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Hexadecimal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "decimal" && toList.value === "hexa") {
    toTitleOne.innerText = "The Hexadecimal number is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "decimal" && toList.value === "roman") {
    toTitleOne.innerText = "The Roman number is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (
    (fromList.value === "decimal" || fromList.value === "ascii") &&
    toList.value === "text"
  ) {
    toTitleOne.innerText = "The Text is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "binary" && toList.value === "decimal") {
    toTitleOne.innerText = "The Decimal number is:";
    toTitleTwo.innerText = "The Octal number is:";
    toTitleThree.innerText = "The Hexadecimal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "binary" && toList.value === "octal") {
    toTitleOne.innerText = "The Octal number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Hexadecimal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "binary" && toList.value === "hexa") {
    toTitleOne.innerText = "The Hexadecimal number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "binary" && toList.value === "roman") {
    toTitleOne.innerText = "The Roman number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "binary" && toList.value === "text") {
    toTitleOne.innerText = "The Text is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "octal" && toList.value === "decimal") {
    toTitleOne.innerText = "The Decimal number is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Hexadecimal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "octal" && toList.value === "binary") {
    toTitleOne.innerText = "The Binary number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Hexadecimal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "octal" && toList.value === "hexa") {
    toTitleOne.innerText = "The Hexadecimal number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "octal" && toList.value === "roman") {
    toTitleOne.innerText = "The Roman number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "octal" && toList.value === "text") {
    toTitleOne.innerText = "The Text is:";
    toTitleTwo.innerText = "The ASCII number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "hexa" && toList.value === "decimal") {
    toTitleOne.innerText = "The Decimal number is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "hexa" && toList.value === "binary") {
    toTitleOne.innerText = "The Binary number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "hexa" && toList.value === "octal") {
    toTitleOne.innerText = "The Octal number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "hexa" && toList.value === "roman") {
    toTitleOne.innerText = "The Roman number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Octal number is:";
  }
  //
  else if (fromList.value === "hexa" && toList.value === "text") {
    toTitleOne.innerText = "The Text is:";
    toTitleTwo.innerText = "The ASCII number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Octal number is:";
  }
  //
  else if (fromList.value === "roman" && toList.value === "decimal") {
    toTitleOne.innerText = "The Decimal number is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "roman" && toList.value === "binary") {
    toTitleOne.innerText = "The Binary number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "roman" && toList.value === "octal") {
    toTitleOne.innerText = "The Octal number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
  }
  //
  else if (fromList.value === "roman" && toList.value === "hexa") {
    toTitleOne.innerText = "The Hexadecimal number is:";
    toTitleTwo.innerText = "The Decimal number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Octal number is:";
  }
  //
  else if (fromList.value === "roman" && toList.value === "text") {
    toTitleOne.innerText = "The Text is:";
    toTitleTwo.innerText = "The ASCII number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Octal number is:";
  }
  //
  else if (
    fromList.value === "text" &&
    (toList.value === "decimal" || toList.value === "ascii")
  ) {
    toTitleOne.innerText = "The ASCII number is:";
    toTitleTwo.innerText = "The Binary number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
    toTitleFive.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "text" && toList.value === "binary") {
    toTitleOne.innerText = "The Binary number is:";
    toTitleTwo.innerText = "The ASCII number is:";
    toTitleThree.innerText = "The Octal number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
    toTitleFive.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "text" && toList.value === "octal") {
    toTitleOne.innerText = "The Octal number is:";
    toTitleTwo.innerText = "The ASCII number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Hexadecimal number is:";
    toTitleFive.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "text" && toList.value === "hexa") {
    toTitleOne.innerText = "The Hexadecimal number is:";
    toTitleTwo.innerText = "The ASCII number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Octal number is:";
    toTitleFive.innerText = "The Roman number is:";
  }
  //
  else if (fromList.value === "text" && toList.value === "roman") {
    toTitleOne.innerText = "The Roman number is:";
    toTitleTwo.innerText = "The ASCII number is:";
    toTitleThree.innerText = "The Binary number is:";
    toTitleFour.innerText = "The Octal number is:";
    toTitleFive.innerText = "The Hexadecimal number is:";
  }
  //
  else if (
    (fromList.value === "ascii" && toList.value === "decimal") ||
    (fromList.value === "decimal" && toList.value === "ascii")
  ) {
    toTitleOne.innerText = "ASCII and Decimal is same value";
    toTitleTwo.innerText = "ASCII and Decimal is same value";
    toTitleThree.innerText = "ASCII and Decimal is same value";
    toTitleFour.innerText = "ASCII and Decimal is same value";
  }
  //
  else if (
    fromList.value === "ascii" &&
    (toList.value === "binary" ||
      toList.value === "octal" ||
      toList.value === "hexa" ||
      toList.value === "roman")
  ) {
    toTitleOne.innerText = "Change the option ASCII to Decimal";
    toTitleTwo.innerText = "Change the option ASCII to Decimal";
    toTitleThree.innerText = "Change the option ASCII to Decimal";
    toTitleFour.innerText = "Change the option ASCII to Decimal";
  }
  //
  else if (
    (fromList.value === "binary" ||
      fromList.value === "octal" ||
      fromList.value === "hexa" ||
      fromList.value === "roman") &&
    toList.value === "ascii"
  ) {
    toTitleOne.innerText = "Change the option ASCII to Decimal";
    toTitleTwo.innerText = "Change the option ASCII to Decimal";
    toTitleThree.innerText = "Change the option ASCII to Decimal";
    toTitleFour.innerText = "Change the option ASCII to Decimal";
  }
}

function optionalOutputDisplay() {
  optionalOutput.style.display = "block";
  if (toList.value === "text") {
    if (
      fromList.value === "binary" ||
      fromList.value === "octal" ||
      fromList.value === "hexa" ||
      fromList.value === "decimal" ||
      fromList.value === "ascii" ||
      fromList.value === "roman"
    ) {
      optionalOutput.style.display = "none";
    }
  }
}

function outputBoxFiveDisplay() {
  optionalOutputFive.style.display = "none";
  if (fromList.value === "text") optionalOutputFive.style.display = "block";
}

fromList.addEventListener("change", () => {
  switchFromList();
  changeToTitle();
  optionalOutputDisplay();
  clearInputOutputBoxes();
  outputBoxFiveDisplay();
});

toList.addEventListener("change", () => {
  switchToList();
  changeToTitle();
  optionalOutputDisplay();
  clearInputOutputBoxes();
});

// switch
switchList.addEventListener("click", () => {
  if (fromList.value !== "selectOne" && toList.value !== "selectOne") {
    let v = fromList.value;
    fromList.value = toList.value;
    toList.value = v;
    switchFromList();
    switchToList();
    changeToTitle();
    optionalOutputDisplay();
    clearInputOutputBoxes();
    outputBoxFiveDisplay();
  }
});

//
// Helper functions for fractional conversions
function decimalToFraction(value) {
  let [integerPart, fractionalPart] = value.split(".");
  if (!fractionalPart) return integerPart;
  let denominator = Math.pow(10, fractionalPart.length);
  let numerator = parseInt(fractionalPart) + integerPart * denominator;
  return numerator / denominator;
}

function fractionToDecimal(fraction) {
  return fraction;
}

// Decimal to Binary (fractional)
function decimalToBinary(num) {
  let intPart = Math.floor(num);
  let fracPart = num - intPart;
  let intBinary = intPart.toString(2);
  let fracBinary = "";

  while (fracPart !== 0) {
    fracPart *= 2;
    let bit = Math.floor(fracPart);
    fracBinary += bit;
    fracPart -= bit;
  }
  return intBinary + (fracBinary ? "." + fracBinary : "");
}

// Decimal to Octal (fractional)
function decimalToOctal(num) {
  let intPart = Math.floor(num);
  let fracPart = num - intPart;
  let intOctal = intPart.toString(8);
  let fracOctal = "";

  while (fracPart !== 0) {
    fracPart *= 8;
    let bit = Math.floor(fracPart);
    fracOctal += bit;
    fracPart -= bit;
  }
  return intOctal + (fracOctal ? "." + fracOctal : "");
}

// Decimal to Hexadecimal (fractional)
function decimalToHex(num) {
  let intPart = Math.floor(num);
  let fracPart = num - intPart;
  let intHex = intPart.toString(16).toUpperCase();
  let fracHex = "";

  while (fracPart !== 0) {
    fracPart *= 16;
    let bit = Math.floor(fracPart);
    fracHex += bit.toString(16).toUpperCase();
    fracPart -= bit;
  }
  return intHex + (fracHex ? "." + fracHex : "");
}

// Binary to Decimal (fractional)
function binaryToDecimal(bin) {
  let [intPart, fracPart] = bin.split(".");
  let decimal = parseInt(intPart, 2);
  let fracDecimal = 0;

  for (let i = 0; fracPart && i < fracPart.length; i++) {
    fracDecimal += parseInt(fracPart[i]) / Math.pow(2, i + 1);
  }
  return decimal + fracDecimal;
}

// Binary to Octal (fractional)
function binaryToOctal(bin) {
  let decimal = binaryToDecimal(bin);
  return decimalToOctal(decimal);
}

// Binary to Hexadecimal (fractional)
function binaryToHex(bin) {
  let decimal = binaryToDecimal(bin);
  return decimalToHex(decimal);
}

// Octal to Decimal (fractional)
function octalToDecimal(oct) {
  let [intPart, fracPart] = oct.split(".");
  let decimal = parseInt(intPart, 8);
  let fracDecimal = 0;

  for (let i = 0; fracPart && i < fracPart.length; i++) {
    fracDecimal += parseInt(fracPart[i], 8) / Math.pow(8, i + 1);
  }
  return decimal + fracDecimal;
}

// Octal to Binary (fractional)
function octalToBinary(oct) {
  let decimal = octalToDecimal(oct);
  return decimalToBinary(decimal);
}

// Octal to Hexadecimal (fractional)
function octalToHex(oct) {
  let decimal = octalToDecimal(oct);
  return decimalToHex(decimal);
}

// Hexadecimal to Decimal (fractional)
function hexToDecimal(hex) {
  let [intPart, fracPart] = hex.split(".");
  let decimal = parseInt(intPart, 16);
  let fracDecimal = 0;

  for (let i = 0; fracPart && i < fracPart.length; i++) {
    fracDecimal += parseInt(fracPart[i], 16) / Math.pow(16, i + 1);
  }
  return decimal + fracDecimal;
}

// Hexadecimal to Binary (fractional)
function hexToBinary(hex) {
  let decimal = hexToDecimal(hex);
  return decimalToBinary(decimal);
}

// Hexadecimal to Octal (fractional)
function hexToOctal(hex) {
  let decimal = hexToDecimal(hex);
  return decimalToOctal(decimal);
}

// Text to Binary
function textToBinary(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ");
}

// Text to ASCII
function textToASCII(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");
}

// Text to Octal
function textToOctal(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(8))
    .join(" ");
}

// Text to Hexadecimal
function textToHex(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(16).toUpperCase())
    .join(" ");
}

// Binary to Text
function binaryToText(bin) {
  return bin
    .split(" ")
    .map((binary) => String.fromCharCode(parseInt(binary, 2)))
    .join("");
}

// ASCII to Text
function asciiToText(ascii) {
  return ascii
    .split(" ")
    .map((code) => String.fromCharCode(code))
    .join("");
}

// Octal to Text
function octalToText(octal) {
  return octal
    .split(" ")
    .map((oct) => String.fromCharCode(parseInt(oct, 8)))
    .join("");
}

// Hexadecimal to Text
function hexToText(hex) {
  return hex
    .split(" ")
    .map((hexNum) => String.fromCharCode(parseInt(hexNum, 16)))
    .join("");
}

// Roman numeral lookup for conversion
const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Roman to Decimal
function romanToDecimal(roman) {
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanMap[roman[i]];
    const nextVal = romanMap[roman[i + 1]] || 0;
    if (currentVal < nextVal) {
      result -= currentVal;
    } else {
      result += currentVal;
    }
  }
  return result;
}

// Decimal to Roman
function decimalToRoman(num) {
  if (num < 1 || num > 3999)
    return "Invalid number (max Roman numeral is 3999)";
  const romanLookup = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let roman = "";
  for (const [symbol, value] of romanLookup) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }
  return roman;
}

// Complete functions for other Roman numeral conversions
function romanToBinary(roman) {
  let decimal = romanToDecimal(roman);
  return decimalToBinary(decimal);
}

function romanToOctal(roman) {
  let decimal = romanToDecimal(roman);
  return decimalToOctal(decimal);
}

function romanToHex(roman) {
  let decimal = romanToDecimal(roman);
  return decimalToHex(decimal);
}

function binaryToRoman(bin) {
  let decimal = binaryToDecimal(bin);
  return decimalToRoman(decimal);
}

function octalToRoman(oct) {
  let decimal = octalToDecimal(oct);
  return decimalToRoman(decimal);
}

function hexToRoman(hex) {
  let decimal = hexToDecimal(hex);
  return decimalToRoman(decimal);
}

// Roman to Text
function romanToText(roman) {
  return roman
    .split(" ")
    .map(romanToDecimal)
    .map((num) => String.fromCharCode(num))
    .join("");
}

// Text to Roman
function textToRoman(text) {
  return text
    .split("")
    .map((char) => decimalToRoman(char.charCodeAt(0)))
    .join(" ");
}

//
//
// Final output

function finalOutput() {
  // decimal to binary
  if (fromList.value === "decimal" && toList.value === "binary") {
    const userOutput = parseFloat(userInput.value);
    botOutputOne.value = decimalToBinary(userOutput);
    botOutputTwo.value = decimalToOctal(userOutput);
    botOutputThree.value = decimalToHex(userOutput);
    botOutputFour.value = decimalToRoman(userOutput);
  }
  // decimal to octal
  else if (fromList.value === "decimal" && toList.value === "octal") {
    const userOutput = parseFloat(userInput.value);
    botOutputOne.value = decimalToOctal(userOutput);
    botOutputTwo.value = decimalToBinary(userOutput);
    botOutputThree.value = decimalToHex(userOutput);
    botOutputFour.value = decimalToRoman(userOutput);
  }
  // decimal to hexa
  else if (fromList.value === "decimal" && toList.value === "hexa") {
    const userOutput = parseFloat(userInput.value);
    botOutputOne.value = decimalToHex(userOutput);
    botOutputTwo.value = decimalToBinary(userOutput);
    botOutputThree.value = decimalToOctal(userOutput);
    botOutputFour.value = decimalToRoman(userOutput);
  }
  // binary to decimal
  else if (fromList.value === "binary" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutputOne.value = binaryToDecimal(userOutput);
    botOutputTwo.value = binaryToOctal(userOutput);
    botOutputThree.value = binaryToHex(userOutput);
    botOutputFour.value = binaryToRoman(userOutput);
  }
  // binary to octal
  else if (fromList.value === "binary" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutputOne.value = binaryToOctal(userOutput);
    botOutputTwo.value = binaryToDecimal(userOutput);
    botOutputThree.value = binaryToHex(userOutput);
    botOutputFour.value = binaryToRoman(userOutput);
  }
  // binary to hexa
  else if (fromList.value === "binary" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutputOne.value = binaryToHex(userOutput);
    botOutputTwo.value = binaryToDecimal(userOutput);
    botOutputThree.value = binaryToOctal(userOutput);
    botOutputFour.value = binaryToRoman(userOutput);
  }
  // octal to decimal
  else if (fromList.value === "octal" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutputOne.value = octalToDecimal(userOutput);
    botOutputTwo.value = octalToBinary(userOutput);
    botOutputThree.value = octalToHex(userOutput);
    botOutputFour.value = octalToRoman(userOutput);
  }
  // octal to binary
  else if (fromList.value === "octal" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutputOne.value = octalToBinary(userOutput);
    botOutputTwo.value = octalToDecimal(userOutput);
    botOutputThree.value = octalToHex(userOutput);
    botOutputFour.value = octalToRoman(userOutput);
  }
  // octal to hexa
  else if (fromList.value === "octal" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutputOne.value = octalToHex(userOutput);
    botOutputTwo.value = octalToDecimal(userOutput);
    botOutputThree.value = octalToBinary(userOutput);
    botOutputFour.value = octalToRoman(userOutput);
  }
  // hexa to decimal
  else if (fromList.value === "hexa" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutputOne.value = hexToDecimal(userOutput);
    botOutputTwo.value = hexToBinary(userOutput);
    botOutputThree.value = hexToOctal(userOutput);
    botOutputFour.value = hexToRoman(userOutput);
  }
  // hexa to binary
  else if (fromList.value === "hexa" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutputOne.value = hexToBinary(userOutput);
    botOutputTwo.value = hexToDecimal(userOutput);
    botOutputThree.value = hexToOctal(userOutput);
    botOutputFour.value = hexToRoman(userOutput);
  }
  // hexa to octal
  else if (fromList.value === "hexa" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutputOne.value = hexToOctal(userOutput);
    botOutputTwo.value = hexToDecimal(userOutput);
    botOutputThree.value = hexToBinary(userOutput);
    botOutputFour.value = hexToRoman(userOutput);
  }
  // text to binary
  else if (fromList.value === "text" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutputOne.value = textToBinary(userOutput);
    botOutputTwo.value = textToASCII(userOutput);
    botOutputThree.value = textToOctal(userOutput);
    botOutputFour.value = textToHex(userOutput);
    botOutputFive.value = textToRoman(userOutput);
  }
  // text to ascii
  else if (
    fromList.value === "text" &&
    (toList.value === "ascii" || toList.value === "decimal")
  ) {
    const userOutput = userInput.value;
    botOutputOne.value = textToASCII(userOutput);
    botOutputTwo.value = textToBinary(userOutput);
    botOutputThree.value = textToOctal(userOutput);
    botOutputFour.value = textToHex(userOutput);
    botOutputFive.value = textToRoman(userOutput);
  }
  // text to octal
  else if (fromList.value === "text" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutputOne.value = textToOctal(userOutput);
    botOutputTwo.value = textToASCII(userOutput);
    botOutputThree.value = textToBinary(userOutput);
    botOutputFour.value = textToHex(userOutput);
    botOutputFive.value = textToRoman(userOutput);
  }
  // text to hexa
  else if (fromList.value === "text" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutputOne.value = textToHex(userOutput);
    botOutputTwo.value = textToASCII(userOutput);
    botOutputThree.value = textToBinary(userOutput);
    botOutputFour.value = textToOctal(userOutput);
    botOutputFive.value = textToRoman(userOutput);
  }
  // binary to text
  else if (fromList.value === "binary" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutputOne.value = binaryToText(userOutput);
  }
  // ascii to text
  else if (
    (fromList.value === "ascii" || fromList.value === "decimal") &&
    toList.value === "text"
  ) {
    const userOutput = userInput.value;
    botOutputOne.value = asciiToText(userOutput);
  }
  // octal to text
  else if (fromList.value === "octal" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutputOne.value = octalToText(userOutput);
  }
  // hexa to text
  else if (fromList.value === "hexa" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutputOne.value = hexToText(userOutput);
  }
  // roman to text
  else if (fromList.value === "roman" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutputOne.value = romanToText(userOutput);
  }
  // text to roman
  else if (fromList.value === "text" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutputOne.value = textToRoman(userOutput);
    botOutputTwo.value = textToASCII(userOutput);
    botOutputThree.value = textToBinary(userOutput);
    botOutputFour.value = textToOctal(userOutput);
    botOutputFive.value = textToHex(userOutput);
  }
  // decimal to roman
  else if (fromList.value === "decimal" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutputOne.value = decimalToRoman(userOutput);
    botOutputTwo.value = decimalToBinary(userOutput);
    botOutputThree.value = decimalToOctal(userOutput);
    botOutputFour.value = decimalToHex(userOutput);
  }
  // roman to decimal
  else if (fromList.value === "roman" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutputOne.value = romanToDecimal(userOutput);
    botOutputTwo.value = romanToBinary(userOutput);
    botOutputThree.value = romanToOctal(userOutput);
    botOutputFour.value = romanToHex(userOutput);
  }
  // binary to roman
  else if (fromList.value === "binary" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutputOne.value = binaryToRoman(userOutput);
    botOutputTwo.value = binaryToDecimal(userOutput);
    botOutputThree.value = binaryToOctal(userOutput);
    botOutputFour.value = binaryToHex(userOutput);
  }
  // roman to binary
  else if (fromList.value === "roman" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutputOne.value = romanToBinary(userOutput);
    botOutputTwo.value = romanToDecimal(userOutput);
    botOutputThree.value = romanToOctal(userOutput);
    botOutputFour.value = romanToHex(userOutput);
  }
  // octal to roman
  else if (fromList.value === "octal" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutputOne.value = octalToRoman(userOutput);
    botOutputTwo.value = octalToDecimal(userOutput);
    botOutputThree.value = octalToBinary(userOutput);
    botOutputFour.value = octalToHex(userOutput);
  }
  // roman to octal
  else if (fromList.value === "roman" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutputOne.value = romanToOctal(userOutput);
    botOutputTwo.value = romanToDecimal(userOutput);
    botOutputThree.value = romanToBinary(userOutput);
    botOutputFour.value = romanToHex(userOutput);
  }
  // hexa to roman
  else if (fromList.value === "hexa" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutputOne.value = hexToRoman(userOutput);
    botOutputTwo.value = hexToDecimal(userOutput);
    botOutputThree.value = hexToBinary(userOutput);
    botOutputFour.value = hexToOctal(userOutput);
  }
  // roman to hexa
  else if (fromList.value === "roman" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutputOne.value = romanToHex(userOutput);
    botOutputTwo.value = romanToDecimal(userOutput);
    botOutputThree.value = romanToBinary(userOutput);
    botOutputFour.value = romanToOctal(userOutput);
  }
  //
  // decimal to ascii or ascii to decimal
  else if (
    (fromList.value === "decimal" && toList.value === "ascii") ||
    (fromList.value === "ascii" && toList.value === "decimal")
  ) {
    const userOutput = userInput.value;
    botOutputOne.value = userInput.value;
    botOutputTwo.value = "Decimal and ASCII is the same value";
  }
  //
  else {
    botOutputOne.value = `Sorry! invalid input. Select the valid calculation type from above.`;
  }
}

function errorText() {
  if (
    fromList.value === "decimal" ||
    fromList.value === "binary" ||
    fromList.value === "octal"
  ) {
    // if (userInput.value * 2 >= 0) {
    if (isNaN(userInput.value) && toList.value !== "text") {
      botOutputOne.value = "Invalid Input";
      botOutputTwo.value = "Invalid Input";
      botOutputThree.value = "Invalid Input";
      botOutputFour.value = "Invalid Input";
      return true;
    }
  }
  if (fromList.value === "text" || fromList.value === "roman") {
    if (/\d/.test(userInput.value)) {
      botOutputOne.value = "Invalid Input";
      botOutputTwo.value = "Invalid Input";
      botOutputThree.value = "Invalid Input";
      botOutputFour.value = "Invalid Input";
      botOutputFive.value = "Invalid Input";
      return true;
    }
  }
  if (userInput.value === "") {
    botOutputOne.value = "Invalid Input";
    botOutputTwo.value = "Invalid Input";
    botOutputThree.value = "Invalid Input";
    botOutputFour.value = "Invalid Input";
    return true;
  }
  return false;
}

// Convert button
convertTo.addEventListener("click", () => {
  errorText();
  if (errorText() === false) {
    finalOutput();
  }
});

// Reset button

function resetEverything() {
  clearInputOutputBoxes();
  fromList.value = "selectOne";
  toList.value = "selectOne";
  switchFromList();
  switchToList();
  outputBoxFiveDisplay();
  optionalOutput.style.display = "block";
  fromTitle.innerText = "Select an option from above";
  toTitleOne.innerText = "Select an option from above";
  toTitleTwo.innerText = "Select an option from above";
  toTitleThree.innerText = "Select an option from above";
  toTitleFour.innerText = "Select an option from above";
}

resetBtn.addEventListener("click", () => {
  resetEverything();
});
