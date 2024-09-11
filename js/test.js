// let userInput = document.querySelector("#userInput");

// let userInputArray = [];

// function userInputToArray() {
//   for (const v of userInput.value) {
//     userInputArray.push(v);
//   }
// }

// //
// let userInputArray_BtoO = [[], [], [], [], [], [], [], [], [], []];

// function userInputToArray_BtoO() {
//   let aryLength = userInputArray.length;
//   let aryPos = 0;
//   let x = 0;

//   for (let v = 0; v <= aryLength; v) {
//     for (let i = 0; i < 3; i++) {
//       userInputArray_BtoO[x].unshift(userInputArray[aryPos]);
//       aryPos += 1;
//     }

//     v += 3;
//     x += 1;
//   }
// }
//

let fromList = document.querySelector('select[name="fromList"]');
let toList = document.querySelector('select[name="toList"]');
let switchList = document.querySelector("#switch");

let f_decimal = document.querySelector(".f_decimal");
let f_binary = document.querySelector(".f_binary");
let f_octal = document.querySelector(".f_octal");
let f_hexadecimal = document.querySelector(".f_hexadecimal");
let t_decimal = document.querySelector(".t_decimal");
let t_binary = document.querySelector(".t_binary");
let t_octal = document.querySelector(".t_octal");
let t_hexadecimal = document.querySelector(".t_hexadecimal");

let fromTitle = document.querySelector("#fromTitle");
let toTitle = document.querySelector("#toTitle");

function switchFromList() {
  t_decimal.style.display = "block";
  t_binary.style.display = "block";
  t_octal.style.display = "block";
  t_hexadecimal.style.display = "block";

  if (fromList.value === "decimal") {
    t_decimal.style.display = "none";
    fromTitle.innerText = "Enter the Decimal number";
  } else if (fromList.value === "binary") {
    t_binary.style.display = "none";
    fromTitle.innerText = "Enter the Binary number";
  } else if (fromList.value === "octal") {
    t_octal.style.display = "none";
    fromTitle.innerText = "Enter the Octal number";
  } else if (fromList.value === "hexadecimal") {
    t_hexadecimal.style.display = "none";
    fromTitle.innerText = "Enter the Hexadecimal number";
  }
}

function switchToList() {
  f_decimal.style.display = "block";
  f_binary.style.display = "block";
  f_octal.style.display = "block";
  f_hexadecimal.style.display = "block";

  if (toList.value === "decimal") {
    f_decimal.style.display = "none";
    toTitle.innerText = "The Decimal number is:";
  } else if (toList.value === "binary") {
    f_binary.style.display = "none";
    toTitle.innerText = "The Binary number is:";
  } else if (toList.value === "octal") {
    f_octal.style.display = "none";
    toTitle.innerText = "The Octal number is:";
  } else if (toList.value === "hexadecimal") {
    f_hexadecimal.style.display = "none";
    toTitle.innerText = "The Hexadecimal number is:";
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
//
//

//
let inputUser = document.querySelector("#userInput");
let botOutput = document.querySelector("#botOutput");
let convertTo = document.querySelector("#convertTo");
let resetBtn = document.querySelector("#reset");

let userInput = inputUser;

//
let userInputArray = [];
//
function userInputToArray() {
  for (const v of userInput.value) {
    userInputArray.push(v);
  }
}

// Convert decimal number to Binary

let DtoB_integerOutput = [];
let DtoB_fractionOutput = [];

function DtoB_integer() {
  let DtoB_user_input = parseFloat(userInput.value);
  let DtoB_input_integer = Math.floor(DtoB_user_input);

  if (DtoB_input_integer === 0) {
    DtoB_integerOutput.unshift("0");
  } else {
    for (let i = 1; i <= DtoB_input_integer; i) {
      if (DtoB_input_integer % 2 === 0) {
        DtoB_integerOutput.unshift("0");
        DtoB_input_integer = Math.floor(DtoB_input_integer / 2);
      } else {
        DtoB_integerOutput.unshift("1");
        DtoB_input_integer = Math.floor(DtoB_input_integer / 2);
      }
    }
  }
}

function DtoB_fraction() {
  let DtoB_user_input = parseFloat(userInput.value);
  let DtoB_input_fraction = DtoB_user_input - Math.floor(DtoB_user_input);

  if (DtoB_input_fraction * 2 > 0) {
    for (let i = 0; i < 1000; i++) {
      if (DtoB_input_fraction * 2 < 1) {
        if (DtoB_input_fraction === 0) {
          break;
        } else {
          DtoB_fractionOutput.unshift("0");
          DtoB_input_fraction = DtoB_input_fraction * 2;
          DtoB_input_fraction -= Math.floor(DtoB_input_fraction);
        }
      } else {
        if (DtoB_input_fraction === 0) {
          break;
        } else {
          DtoB_fractionOutput.unshift("1");
          DtoB_input_fraction = DtoB_input_fraction * 2;
          DtoB_input_fraction -= Math.floor(DtoB_input_fraction);
        }
      }
    }
  }
}

function DtoB_finalOutput() {
  let DtoB_user_input = parseFloat(userInput.value);
  let DtoB_input_fraction = DtoB_user_input - Math.floor(DtoB_user_input);
  DtoB_integerOutput = [];
  DtoB_fractionOutput = [];
  DtoB_integer();
  DtoB_fraction();
  DtoB_fractionOutput.reverse();
  if (DtoB_input_fraction > 0) {
    botOutput.value = `${DtoB_integerOutput.join(
      ""
    )}.${DtoB_fractionOutput.join("")}`;
  } else {
    botOutput.value = DtoB_integerOutput.join("");
  }
}

// Convert Binary to decimal number

let userInputBtoD_Integer = [];
let userInputBtoD_Fraction = [];

function divideIntegerAndFraction() {
  for (const v of userInputArray) {
    if (v === ".") {
      userInputArray.reverse();
      for (const v of userInputArray) {
        if (v === ".") {
          break;
        } else {
          userInputBtoD_Fraction.unshift(parseInt(v));
        }
      }
      break;
    } else {
      userInputBtoD_Integer.unshift(parseInt(v));
    }
  }
}

let userIntegerTotal = 0;
function userIntegerTotalFunc() {
  let i = 0;
  for (const v of userInputBtoD_Integer) {
    let n = v * 2 ** i;
    userIntegerTotal += n;
    i++;
  }
}

let userFractionTotal = 0;
function userFractionTotalFunc() {
  let i = -1;
  for (const v of userInputBtoD_Fraction) {
    let n = v * 2 ** i;
    userFractionTotal += n;
    i--;
  }
}

function BtoD_finalOutput() {
  userInputBtoD_Integer = [];
  userInputBtoD_Fraction = [];
  userIntegerTotal = 0;
  userFractionTotal = 0;

  divideIntegerAndFraction();
  userIntegerTotalFunc();
  userFractionTotalFunc();

  const BtoD_total_output = userIntegerTotal + userFractionTotal;
  botOutput.value = BtoD_total_output;
  userInput = botOutput;
}

// Convert Decimal to Octal number

// Decimal to Octal integer output
let DtoO_integerOutputArray = [];

function DtoO_integer() {
  const v = parseFloat(userInput.value);
  let input_num = Math.floor(v);
  if (input_num < 8) {
    DtoO_integerOutputArray.unshift(input_num);
  } else {
    for (let r = 8; r <= input_num; r) {
      let i = input_num / 8;
      let f = i - Math.floor(i);
      let o = 8 * f;
      DtoO_integerOutputArray.unshift(o);
      input_num = Math.floor(i);
    }
    if (input_num > 0 && input_num < 8) {
      DtoO_integerOutputArray.unshift(input_num);
    }
  }
}

// Decimal to Octal fraction output
let DtoO_fractionOutputArray = [];

function DtoO_fraction() {
  const v = parseFloat(userInput.value);
  let input_num = v - Math.floor(v);

  for (let r = 0; r < 50; r++) {
    if (input_num > 0) {
      let i = input_num * 8;
      let o = Math.floor(i);
      DtoO_fractionOutputArray.push(o);
      input_num = i - o;
    } else {
      break;
    }
  }
}

//
function DtoO_finalOutput() {
  const v = parseFloat(userInput.value);
  let input_num = v - Math.floor(v);

  DtoO_integerOutputArray = [];
  DtoO_fractionOutputArray = [];

  DtoO_integer();
  DtoO_fraction();

  if (input_num > 0) {
    botOutput.value = `${DtoO_integerOutputArray.join(
      ""
    )}.${DtoO_fractionOutputArray.join("").toString()}`;
  } else {
    botOutput.value = `${DtoO_integerOutputArray.join("")}`;
  }
}

// Convert Octal to decimal number

let userOtoD_InputInteger = [];
let userOtoD_InputFraction = [];

function divideOtoD_IntegerAndFraction() {
  for (const v of userInputArray) {
    if (v === ".") {
      userInputArray.reverse();
      for (const v of userInputArray) {
        if (v === ".") {
          break;
        } else {
          userOtoD_InputFraction.unshift(parseInt(v));
        }
      }
      break;
    } else {
      userOtoD_InputInteger.unshift(parseInt(v));
    }
  }
}

let OtoD_userIntegerTotal = 0;
function userOtoD_IntegerTotalFunc() {
  let i = 0;
  for (const v of userOtoD_InputInteger) {
    let n = v * 8 ** i;
    OtoD_userIntegerTotal += n;
    i++;
  }
}

let userOtoD_FractionTotal = 0;
function userOtoD_FractionTotalFunc() {
  let i = -1;
  for (const v of userOtoD_InputFraction) {
    let n = v * 8 ** i;
    userOtoD_FractionTotal += n;
    i--;
  }
}

function OtoD_finalOutput() {
  userOtoD_InputInteger = [];
  userOtoD_InputFraction = [];
  OtoD_userIntegerTotal = 0;
  userOtoD_FractionTotal = 0;

  divideOtoD_IntegerAndFraction();
  userOtoD_IntegerTotalFunc();
  userOtoD_FractionTotalFunc();

  const OtoD_total_output = OtoD_userIntegerTotal + userOtoD_FractionTotal;
  botOutput.value = OtoD_total_output;
  userInput = botOutput;
}

// Convert Decimal to Hexadecimal

// Decimal to HexaDecimal integer output
let DtoH_integerOutputArray = [];
function DtoH_integer() {
  const v = parseFloat(userInput.value);
  let input_num = Math.floor(v);
  if (input_num < 16) {
    DtoH_integerOutputArray.unshift(input_num);
  } else {
    for (let r = 16; r <= input_num; r) {
      let i = input_num / 16;
      let f = i - Math.floor(i);
      let o = 16 * f;
      DtoH_integerOutputArray.unshift(o);
      input_num = Math.floor(i);
    }
    if (input_num > 0 && input_num < 16) {
      DtoH_integerOutputArray.unshift(input_num);
    }
  }
}

// Decimal to Hexa Integer
let decimalToHexaIntArray = [];
function decimalToHexaInteger() {
  for (const v of DtoH_integerOutputArray) {
    if (v === 10) {
      decimalToHexaIntArray.push("A");
    } else if (v === 11) {
      decimalToHexaIntArray.push("B");
    } else if (v === 12) {
      decimalToHexaIntArray.push("C");
    } else if (v === 13) {
      decimalToHexaIntArray.push("D");
    } else if (v === 14) {
      decimalToHexaIntArray.push("E");
    } else if (v === 15) {
      decimalToHexaIntArray.push("F");
    } else {
      decimalToHexaIntArray.push(v);
    }
  }
}

// Decimal to HexaDecimal fraction output
let DtoH_fractionOutputArray = [];
function DtoH_fraction() {
  const v = parseFloat(userInput.value);
  let input_num = v - Math.floor(v);

  for (let r = 0; r < 50; r++) {
    if (input_num > 0) {
      let i = input_num * 16;
      let o = Math.floor(i);
      DtoH_fractionOutputArray.push(o);
      input_num = i - o;
    } else {
      break;
    }
  }
}

// Decimal to Hexa Integer
let decimalToHexaFractionArray = [];
function decimalToHexaFraction() {
  for (const v of DtoH_fractionOutputArray) {
    if (v === 10) {
      decimalToHexaFractionArray.push("A");
    } else if (v === 11) {
      decimalToHexaFractionArray.push("B");
    } else if (v === 12) {
      decimalToHexaFractionArray.push("C");
    } else if (v === 13) {
      decimalToHexaFractionArray.push("D");
    } else if (v === 14) {
      decimalToHexaFractionArray.push("E");
    } else if (v === 15) {
      decimalToHexaFractionArray.push("F");
    } else {
      decimalToHexaFractionArray.push(v);
    }
  }
}

//
function DtoH_finalOutput() {
  const v = parseFloat(userInput.value);
  let input_num = v - Math.floor(v);

  DtoH_integerOutputArray = [];
  DtoH_fractionOutputArray = [];
  decimalToHexaIntArray = [];
  decimalToHexaFractionArray = [];

  DtoH_integer();
  DtoH_fraction();
  decimalToHexaInteger();
  decimalToHexaFraction();

  if (input_num > 0) {
    botOutput.value = `${decimalToHexaIntArray.join(
      ""
    )}.${decimalToHexaFractionArray.join("").toString()}`;
  } else {
    botOutput.value = `${decimalToHexaIntArray.join("")}`;
  }
}

// Convert HexaDecimal to Decimal Number

let userInputHtoD_Array = [];
function gettingHtoD_UserInput() {
  for (const a of userInputArray) {
    if (a === "A") {
      userInputHtoD_Array.push(10);
    } else if (a === "B") {
      userInputHtoD_Array.push(11);
    } else if (a === "C") {
      userInputHtoD_Array.push(12);
    } else if (a === "D") {
      userInputHtoD_Array.push(13);
    } else if (a === "E") {
      userInputHtoD_Array.push(14);
    } else if (a === "F") {
      userInputHtoD_Array.push(15);
    } else {
      userInputHtoD_Array.push(a);
    }
  }
}

let userHtoD_InputInteger = [];
let userHtoD_InputFraction = [];

function divideHtoD_IntegerAndFraction() {
  for (const v of userInputHtoD_Array) {
    if (v === ".") {
      userInputHtoD_Array.reverse();
      for (const v of userInputHtoD_Array) {
        if (v === ".") {
          break;
        } else {
          userHtoD_InputFraction.unshift(parseInt(v));
        }
      }
      break;
    } else {
      userHtoD_InputInteger.unshift(parseInt(v));
    }
  }
}

let HtoD_userIntegerTotal = 0;
function userHtoD_IntegerTotalFunc() {
  let i = 0;
  for (const v of userHtoD_InputInteger) {
    let n = v * 16 ** i;
    HtoD_userIntegerTotal += n;
    i++;
  }
}

let userHtoD_FractionTotal = 0;
function userHtoD_FractionTotalFunc() {
  let i = -1;
  for (const v of userHtoD_InputFraction) {
    let n = v * 16 ** i;
    userHtoD_FractionTotal += n;
    i--;
  }
}

function HtoD_finalOutput() {
  userInputHtoD_Array = [];
  userHtoD_InputInteger = [];
  userHtoD_InputFraction = [];
  HtoD_userIntegerTotal = 0;
  userHtoD_FractionTotal = 0;

  gettingHtoD_UserInput();
  divideHtoD_IntegerAndFraction();
  userHtoD_IntegerTotalFunc();
  userHtoD_FractionTotalFunc();

  const HtoD_total_output = HtoD_userIntegerTotal + userHtoD_FractionTotal;
  botOutput.value = HtoD_total_output;
  userInput = botOutput;
}

convertTo.addEventListener("click", () => {
  userInput = inputUser;
  userInputArray = [];
  userInputToArray();
  // console.log(userInputArray);

  if (fromList.value === "decimal" && toList.value === "binary") {
    DtoB_finalOutput();
  } else if (fromList.value === "binary" && toList.value === "decimal") {
    BtoD_finalOutput();
  } else if (fromList.value === "decimal" && toList.value === "octal") {
    DtoO_finalOutput();
  } else if (fromList.value === "octal" && toList.value === "decimal") {
    OtoD_finalOutput();
  } else if (fromList.value === "decimal" && toList.value === "hexadecimal") {
    DtoH_finalOutput();
  } else if (fromList.value === "hexadecimal" && toList.value === "decimal") {
    HtoD_finalOutput();
  } else if (fromList.value === "binary" && toList.value === "octal") {
    BtoD_finalOutput();
    DtoO_finalOutput();
  } else if (fromList.value === "binary" && toList.value === "hexadecimal") {
    BtoD_finalOutput();
    DtoH_finalOutput();
  } else if (fromList.value === "octal" && toList.value === "binary") {
    OtoD_finalOutput();
    DtoB_finalOutput();
  } else if (fromList.value === "octal" && toList.value === "hexadecimal") {
    OtoD_finalOutput();
    DtoH_finalOutput();
  } else if (fromList.value === "hexadecimal" && toList.value === "binary") {
    HtoD_finalOutput();
    DtoB_finalOutput();
  } else if (fromList.value === "hexadecimal" && toList.value === "octal") {
    HtoD_finalOutput();
    DtoO_finalOutput();
  } else {
    botOutput.value = `Sorry! invalid input. Select the calculation type from above.`;
  }
});

resetBtn.addEventListener("click", () => {
  inputUser.value = "";
  botOutput.value = "";
  fromList.value = "selectOne";
  toList.value = "selectOne";
  switchFromList();
  switchToList();
  fromTitle.innerText = "Select an option from above";
  toTitle.innerText = "Select an option from above";
});
