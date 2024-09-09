// "use strict";

// Convert decimal number to Binary

let DtoB_input = document.querySelector('textarea[name="DtoB-input"]');
let DtoB_submit = document.querySelector('input[name="DtoB_submit"]');
let DtoB_output = document.querySelector('textarea[name="DtoB-output"]');

let DtoB_integerOutput = [];
let DtoB_fractionOutput = [];

function DtoB_integer() {
  let DtoB_user_input = parseFloat(DtoB_input.value);
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
  let DtoB_user_input = parseFloat(DtoB_input.value);
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

function DtoB_outputFunction() {
  let DtoB_user_input = parseFloat(DtoB_input.value);
  let DtoB_input_fraction = DtoB_user_input - Math.floor(DtoB_user_input);
  DtoB_integerOutput = [];
  DtoB_fractionOutput = [];
  DtoB_integer();
  DtoB_fraction();
  DtoB_fractionOutput.reverse();
  if (DtoB_input_fraction > 0) {
    DtoB_output.value = `${DtoB_integerOutput.join(
      ""
    )}.${DtoB_fractionOutput.join("")}`;
  } else {
    DtoB_output.value = DtoB_integerOutput.join("");
  }
}

DtoB_submit.addEventListener("click", () => {
  DtoB_outputFunction();
});

// Convert Binary to decimal number

let BtoD_input = document.querySelector('textarea[name="BtoD-input"]');
let BtoD_submit = document.querySelector('input[name="BtoD_submit"]');
let BtoD_output = document.querySelector('textarea[name="BtoD-output"]');

let userInputBtoD_Array = [];

function gettingUserInput() {
  for (const a of BtoD_input.value) {
    userInputBtoD_Array.push(a);
  }
}

let userInputInteger = [];
let userInputFraction = [];

function divideIntegerAndFraction() {
  for (const v of userInputBtoD_Array) {
    if (v === ".") {
      userInputBtoD_Array.reverse();
      for (const v of userInputBtoD_Array) {
        if (v === ".") {
          break;
        } else {
          userInputFraction.unshift(parseInt(v));
        }
      }
      break;
    } else {
      userInputInteger.unshift(parseInt(v));
    }
  }
}

let userIntegerTotal = 0;

function userIntegerTotalFunc() {
  let i = 0;
  for (const v of userInputInteger) {
    let n = v * 2 ** i;
    userIntegerTotal += n;
    i++;
  }
}

let userFractionTotal = 0;

function userFractionTotalFunc() {
  let i = -1;
  for (const v of userInputFraction) {
    let n = v * 2 ** i;
    userFractionTotal += n;
    i--;
  }
}

BtoD_submit.addEventListener("click", () => {
  userInputBtoD_Array = [];
  userInputInteger = [];
  userInputFraction = [];
  userIntegerTotal = 0;
  userFractionTotal = 0;

  gettingUserInput();
  divideIntegerAndFraction();
  userIntegerTotalFunc();
  userFractionTotalFunc();

  const BtoD_total_output = userIntegerTotal + userFractionTotal;
  BtoD_output.value = BtoD_total_output;
});

// =======================================================================

// Convert Binary to decimal number

let DtoO_input = document.querySelector('textarea[name="DtoO-input"]');
let DtoO_submit = document.querySelector('input[name="DtoO_submit"]');
let DtoO_output = document.querySelector('textarea[name="DtoO-output"]');

//
// Decimal to Octal integer output
let DtoO_integerOutputArray = [];

function DtoO_integer() {
  const v = parseFloat(DtoO_input.value);
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

//
// Decimal to Octal fraction output
let DtoO_fractionOutputArray = [];

function DtoO_fraction() {
  const v = parseFloat(DtoO_input.value);
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
DtoO_submit.addEventListener("click", () => {
  const v = parseFloat(DtoO_input.value);
  let input_num = v - Math.floor(v);

  DtoO_integerOutputArray = [];
  DtoO_fractionOutputArray = [];

  DtoO_integer();
  DtoO_fraction();

  if (input_num > 0) {
    DtoO_output.value = `${DtoO_integerOutputArray.join(
      ""
    )}.${DtoO_fractionOutputArray.join("").toString()}`;
  } else {
    DtoO_output.value = `${DtoO_integerOutputArray.join("")}`;
  }
});

//
//
// Convert Octal to decimal number

let OtoD_input = document.querySelector('textarea[name="OtoD-input"]');
let OtoD_submit = document.querySelector('input[name="OtoD_submit"]');
let OtoD_output = document.querySelector('textarea[name="OtoD-output"]');

let userInputOtoD_Array = [];

function gettingOtoD_UserInput() {
  for (const a of OtoD_input.value) {
    userInputOtoD_Array.push(a);
  }
}

let userOtoD_InputInteger = [];
let userOtoD_InputFraction = [];

function divideOtoD_IntegerAndFraction() {
  for (const v of userInputOtoD_Array) {
    if (v === ".") {
      userInputOtoD_Array.reverse();
      for (const v of userInputOtoD_Array) {
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

OtoD_submit.addEventListener("click", () => {
  userInputOtoD_Array = [];
  userOtoD_InputInteger = [];
  userOtoD_InputFraction = [];
  OtoD_userIntegerTotal = 0;
  userOtoD_FractionTotal = 0;

  gettingOtoD_UserInput();
  divideOtoD_IntegerAndFraction();
  userOtoD_IntegerTotalFunc();
  userOtoD_FractionTotalFunc();

  const OtoD_total_output = OtoD_userIntegerTotal + userOtoD_FractionTotal;
  OtoD_output.value = OtoD_total_output;
});
