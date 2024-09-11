// Decimal to Binary:
function decimalToBinary(decimal) {
    return parseInt(decimal, 10).toString(2);
  }
  
  // Decimal to Octal:
  function decimalToOctal(decimal) {
    return parseInt(decimal, 10).toString(8);
  }
  
  // Decimal to Hexadecimal:
  function decimalToHexadecimal(decimal) {
    return parseInt(decimal, 10).toString(16).toUpperCase();
  }
  
  // Binary to Decimal:
  function binaryToDecimal(binary) {
    return parseInt(binary, 2).toString(10);
  }
  
  // Binary to Octal:
  function binaryToOctal(binary) {
    return parseInt(binary, 2).toString(8);
  }
  
  // Binary to Hexadecimal:
  function binaryToHexadecimal(binary) {
    return parseInt(binary, 2).toString(16).toUpperCase();
  }
  
  // Octal to Decimal:
  function octalToDecimal(octal) {
    return parseInt(octal, 8).toString(10);
  }
  
  // Octal to Binary:
  function octalToBinary(octal) {
    return parseInt(octal, 8).toString(2);
  }
  
  // Octal to Hexadecimal:
  function octalToHexadecimal(octal) {
    return parseInt(octal, 8).toString(16).toUpperCase();
  }
  
  // Hexadecimal to Decimal:
  function hexaToDecimal(hexa) {
    return parseInt(hexa, 16).toString(10);
  }
  
  // Hexadecimal to Binary:
  function hexaToBinary(hexa) {
    return parseInt(hexa, 16).toString(2);
  }
  
  // Hexadecimal to Octal:
  function hexaToOctal(hexa) {
    return parseInt(hexa, 16).toString(8);
  }
  
  // Text to Binary:
  function textToBinary(text) {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")) // Convert to binary
      .join(" ");
  }
  
  // Text to ASCII:
  function textToAscii(text) {
    return text
      .split("")
      .map((char) => char.charCodeAt(0)) // Get ASCII code
      .join(" ");
  }
  
  // Text to Octal:
  function textToOctal(text) {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(8).padStart(3, "0")) // Convert to octal
      .join(" ");
  }
  
  // Text to Hexadecimal:
  function textToHexadecimal(text) {
    return text
      .split("")
      .map((char) =>
        char.charCodeAt(0).toString(16).padStart(2, "0").toUpperCase()
      )
      .join(" ");
  }
  
  // Binary to Text:
  function binaryToText(binary) {
    return binary
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2))) // Convert binary to character
      .join("");
  }
  
  // ASCII to Text:
  function asciiToText(ascii) {
    return ascii
      .split(" ")
      .map((code) => String.fromCharCode(parseInt(code, 10))) // Convert ASCII to character
      .join("");
  }
  
  // Octal to Text:
  function octalToText(octal) {
    return octal
      .split(" ")
      .map((oct) => String.fromCharCode(parseInt(oct, 8))) // Convert octal to character
      .join("");
  }
  
  // Hexadecimal to Text:
  function hexaToText(hex) {
    return hex
      .split(" ")
      .map((hex) => String.fromCharCode(parseInt(hex, 16))) // Convert hexa to character
      .join("");
  }
  
  // Roman Number
  
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  
  // Roman to Text
  function romanToText(roman) {
    return roman
      .split(" ")
      .map(romanToDecimal) // Convert each Roman numeral to decimal
      .map((num) => String.fromCharCode(num)) // Convert decimal to character
      .join(""); // Join characters to form text
  }
  
  // Text to Roman
  function textToRoman(text) {
    return text
      .split("")
      .map((char) => decimalToRoman(char.charCodeAt(0))) // Convert each character to its ASCII value and then to Roman
      .join(" ");
  }
  
  // Decimal to Roman
  function decimalToRoman(decimal) {
    let roman = "";
    for (let key in romanMap) {
      while (decimal >= romanMap[key]) {
        roman += key;
        decimal -= romanMap[key];
      }
    }
    return roman;
  }
  
  // Roman to Decimal
  function romanToDecimal(roman) {
    let decimal = 0;
    for (let i = 0; i < roman.length; i++) {
      let current = romanMap[roman[i]];
      let next = romanMap[roman[i + 1]];
  
      if (next && current < next) {
        decimal -= current;
      } else {
        decimal += current;
      }
    }
    return decimal;
  }
  
  // Binary to Roman
  function binaryToRoman(binary) {
    let decimal = parseInt(binary, 2); // Convert binary to decimal
    return decimalToRoman(decimal); // Convert decimal to Roman
  }
  
  // Roman to Binary
  function romanToBinary(roman) {
    let decimal = romanToDecimal(roman); // Convert Roman to decimal
    return decimal.toString(2); // Convert decimal to binary
  }
  
  // Octal to Roman
  function octalToRoman(octal) {
    let decimal = parseInt(octal, 8); // Convert octal to decimal
    return decimalToRoman(decimal); // Convert decimal to Roman
  }
  
  // Roman to Octal
  function romanToOctal(roman) {
    let decimal = romanToDecimal(roman); // Convert Roman to decimal
    return decimal.toString(8); // Convert decimal to octal
  }
  
  // Hexadecimal to Roman
  function hexaToRoman(hex) {
    let decimal = parseInt(hex, 16); // Convert hexa to decimal
    return decimalToRoman(decimal); // Convert decimal to Roman
  }
  
  // Roman to Hexadecimal
  function romanToHexadecimal(roman) {
    let decimal = romanToDecimal(roman); // Convert Roman to decimal
    return decimal.toString(16).toUpperCase(); // Convert decimal to hexa
  }
  
  
  
  
  
  
  
  