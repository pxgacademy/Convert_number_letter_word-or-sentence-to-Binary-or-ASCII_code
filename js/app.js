let fromList = document.querySelector('select[name="fromList"]');
let toList = document.querySelector('select[name="toList"]');
let switchList = document.querySelector("#switch");

let f_decimal = document.querySelector(".f_decimal");
let f_binary = document.querySelector(".f_binary");
let f_octal = document.querySelector(".f_octal");
let f_hexa = document.querySelector(".f_hexa");
let f_roman = document.querySelector(".f_roman");
let f_text = document.querySelector(".f_text");
let f_ascii = document.querySelector(".f_ascii");

let t_decimal = document.querySelector(".t_decimal");
let t_binary = document.querySelector(".t_binary");
let t_octal = document.querySelector(".t_octal");
let t_hexa = document.querySelector(".t_hexa");
let t_roman = document.querySelector(".t_roman");
let t_text = document.querySelector(".t_text");
let t_ascii = document.querySelector(".t_ascii");

let fromTitle = document.querySelector("#fromTitle");
let toTitle = document.querySelector("#toTitle");

function switchFromList() {
  t_decimal.style.display = "block";
  t_binary.style.display = "block";
  t_octal.style.display = "block";
  t_hexa.style.display = "block";
  t_roman.style.display = "block";
  t_text.style.display = "block";
  t_ascii.style.display = "block";

  if (fromList.value === "decimal") {
    t_decimal.style.display = "none";
    fromTitle.innerText = "Enter the Decimal number";
  } else if (fromList.value === "binary") {
    t_binary.style.display = "none";
    fromTitle.innerText = "Enter the Binary number";
  } else if (fromList.value === "octal") {
    t_octal.style.display = "none";
    fromTitle.innerText = "Enter the Octal number";
  } else if (fromList.value === "hexa") {
    t_hexa.style.display = "none";
    fromTitle.innerText = "Enter the Hexadecimal number";
  } else if (fromList.value === "roman") {
    t_roman.style.display = "none";
    fromTitle.innerText = "Enter the Roman number";
  } else if (fromList.value === "text") {
    t_text.style.display = "none";
    fromTitle.innerText = "Enter the Text";
  } else if (fromList.value === "ascii") {
    t_ascii.style.display = "none";
    fromTitle.innerText = "Enter the ASCII number";
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
    toTitle.innerText = "The Decimal number is:";
  } else if (toList.value === "binary") {
    f_binary.style.display = "none";
    toTitle.innerText = "The Binary number is:";
  } else if (toList.value === "octal") {
    f_octal.style.display = "none";
    toTitle.innerText = "The Octal number is:";
  } else if (toList.value === "hexa") {
    f_hexa.style.display = "none";
    toTitle.innerText = "The Hexadecimal number is:";
  } else if (toList.value === "roman") {
    f_roman.style.display = "none";
    toTitle.innerText = "The Roman number is:";
  } else if (toList.value === "text") {
    f_text.style.display = "none";
    toTitle.innerText = "The Text is:";
  } else if (toList.value === "ascii") {
    f_ascii.style.display = "none";
    toTitle.innerText = "The ASCII number is:";
  }
}

fromList.addEventListener("change", () => {
  switchFromList();
});

toList.addEventListener("change", () => {
  switchToList();
});

// switch
switchList.addEventListener("click", () => {
  if (fromList.value !== "selectOne" && toList.value !== "selectOne") {
    let v = fromList.value;
    fromList.value = toList.value;
    toList.value = v;
    switchFromList();
    switchToList();
  }
});

//

let userInput = document.querySelector("#userInput");
let botOutput = document.querySelector("#botOutput");
let convertTo = document.querySelector("#convertTo");
let resetBtn = document.querySelector("#reset");

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
    .map((char) => char.charCodeAt(0).toString(16))
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
    botOutput.value = decimalToBinary(userOutput);
  }
  // decimal to octal
  else if (fromList.value === "decimal" && toList.value === "octal") {
    const userOutput = parseFloat(userInput.value);
    botOutput.value = decimalToOctal(userOutput);
  }
  // decimal to hexa
  else if (fromList.value === "decimal" && toList.value === "hexa") {
    const userOutput = parseFloat(userInput.value);
    botOutput.value = decimalToHex(userOutput);
  }
  // binary to decimal
  else if (fromList.value === "binary" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutput.value = binaryToDecimal(userOutput);
  }
  // binary to octal
  else if (fromList.value === "binary" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutput.value = binaryToOctal(userOutput);
  }
  // binary to hexa
  else if (fromList.value === "binary" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutput.value = binaryToHex(userOutput);
  }
  // octal to decimal
  else if (fromList.value === "octal" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutput.value = octalToDecimal(userOutput);
  }
  // octal to binary
  else if (fromList.value === "octal" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutput.value = octalToBinary(userOutput);
  }
  // octal to hexa
  else if (fromList.value === "octal" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutput.value = octalToHex(userOutput);
  }
  // hexa to decimal
  else if (fromList.value === "hexa" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutput.value = hexToDecimal(userOutput);
  }
  // hexa to binary
  else if (fromList.value === "hexa" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutput.value = hexToBinary(userOutput);
  }
  // hexa to octal
  else if (fromList.value === "hexa" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutput.value = hexToOctal(userOutput);
  }
  // text to binary
  else if (fromList.value === "text" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutput.value = textToBinary(userOutput);
  }
  // text to ascii
  else if (
    (fromList.value === "text" && toList.value === "ascii") ||
    toList.value === "decimal"
  ) {
    const userOutput = userInput.value;
    botOutput.value = textToASCII(userOutput);
  }
  // text to octal
  else if (fromList.value === "text" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutput.value = textToOctal(userOutput);
  }
  // text to hexa
  else if (fromList.value === "text" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutput.value = textToHex(userOutput);
  }
  // binary to text
  else if (fromList.value === "binary" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutput.value = binaryToText(userOutput);
  }
  // ascii to text
  else if (
    fromList.value === "ascii" ||
    (fromList.value === "decimal" && toList.value === "text")
  ) {
    const userOutput = userInput.value;
    botOutput.value = asciiToText(userOutput);
  }
  // octal to text
  else if (fromList.value === "octal" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutput.value = octalToText(userOutput);
  }
  // hexa to text
  else if (fromList.value === "hexa" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutput.value = hexToText(userOutput);
  }
  // roman to text
  else if (fromList.value === "roman" && toList.value === "text") {
    const userOutput = userInput.value;
    botOutput.value = romanToText(userOutput);
  }
  // text to roman
  else if (fromList.value === "text" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutput.value = textToRoman(userOutput);
  }
  // decimal to roman
  else if (fromList.value === "decimal" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutput.value = decimalToRoman(userOutput);
  }
  // roman to decimal
  else if (fromList.value === "roman" && toList.value === "decimal") {
    const userOutput = userInput.value;
    botOutput.value = romanToDecimal(userOutput);
  }
  // binary to roman
  else if (fromList.value === "binary" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutput.value = binaryToRoman(userOutput);
  }
  // roman to binary
  else if (fromList.value === "roman" && toList.value === "binary") {
    const userOutput = userInput.value;
    botOutput.value = romanToBinary(userOutput);
  }
  // octal to roman
  else if (fromList.value === "octal" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutput.value = octalToRoman(userOutput);
  }
  // roman to octal
  else if (fromList.value === "roman" && toList.value === "octal") {
    const userOutput = userInput.value;
    botOutput.value = romanToOctal(userOutput);
  }
  // hexa roman
  else if (fromList.value === "hexa" && toList.value === "roman") {
    const userOutput = userInput.value;
    botOutput.value = hexToRoman(userOutput);
  }
  // roman hexa
  else if (fromList.value === "roman" && toList.value === "hexa") {
    const userOutput = userInput.value;
    botOutput.value = romanToHex(userOutput);
  }
  //
  else {
    botOutput.value = `Sorry! invalid input. Select the valid calculation type from above.`;
  }
}

// Convert button
convertTo.addEventListener("click", () => {
  finalOutput();
});

// Reset button

function resetEverything() {
  userInput.value = "";
  botOutput.value = "";
  fromList.value = "selectOne";
  toList.value = "selectOne";
  switchFromList();
  switchToList();
  fromTitle.innerText = "Select an option from above";
  toTitle.innerText = "Select an option from above";
}

resetBtn.addEventListener("click", () => {
  resetEverything();
});
