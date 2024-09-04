// Letter	ASCII Code

/*
const smallLetterASCII = {
  a: "097",
  b: "098",
  c: "099",
  d: "100",
  e: "101",
  f: "102",
  g: "103",
  h: "104",
  i: "105",
  j: "106",
  k: "107",
  l: "108",
  m: "109",
  n: "110",
  o: "111",
  p: "112",
  q: "113",
  r: "114",
  s: "115",
  t: "116",
  u: "117",
  v: "118",
  w: "119",
  x: "120",
  y: "121",
  z: "122",
};

const capitalLetterASCII = {
  A: "065",
  B: "066",
  C: "067",
  D: "068",
  E: "069",
  F: "070",
  G: "071",
  H: "072",
  I: "073",
  J: "074",
  K: "075",
  L: "076",
  M: "077",
  N: "078",
  O: "079",
  P: "080",
  Q: "081",
  R: "082",
  S: "083",
  T: "084",
  U: "085",
  V: "086",
  W: "087",
  X: "088",
  Y: "089",
  Z: "090",
};
*/

// Letter Binary code
const smallLetterBinary = {
  a: "01100001",
  b: "01100010",
  c: "01100011",
  d: "01100100",
  e: "01100101",
  f: "01100110",
  g: "01100111",
  h: "01101000",
  i: "01101001",
  j: "01101010",
  k: "01101011",
  l: "01101100",
  m: "01101101",
  n: "01101110",
  o: "01101111",
  p: "01110000",
  q: "01110001",
  r: "01110010",
  s: "01110011",
  t: "01110100",
  u: "01110101",
  v: "01110110",
  w: "01110111",
  x: "01111000",
  y: "01111001",
  z: "01111010",
};

const capitalLetterBinary = {
  A: "01000001",
  B: "01000010",
  C: "01000011",
  D: "01000100",
  E: "01000101",
  F: "01000110",
  G: "01000111",
  H: "01001000",
  I: "01001001",
  J: "01001010",
  K: "01001011",
  L: "01001100",
  M: "01001101",
  N: "01001110",
  O: "01001111",
  P: "01010000",
  Q: "01010001",
  R: "01010010",
  S: "01010011",
  T: "01010100",
  U: "01010101",
  V: "01010110",
  W: "01010111",
  X: "01011000",
  Y: "01011001",
  Z: "01011010",
};

let output = document.querySelector('textarea[id="outputBox"]');
let submit = document.querySelector('input[value="Submit"]');
let fullName = document.querySelector('input[type="text"]');
let binaryName = "";

submit.addEventListener("click", () => {
  binaryName = "";
  for (ltr of fullName.value) {
    if (ltr === " ") {
      binaryName += " ";
    }
    if (ltr === "A") {
      binaryName += capitalLetterBinary["A"];
    }
    if (ltr === "B") {
      binaryName += capitalLetterBinary["B"];
    }
    if (ltr === "C") {
      binaryName += capitalLetterBinary["C"];
    }
    if (ltr === "D") {
      binaryName += capitalLetterBinary["D"];
    }
    if (ltr === "E") {
      binaryName += capitalLetterBinary["E"];
    }
    if (ltr === "F") {
      binaryName += capitalLetterBinary["F"];
    }
    if (ltr === "G") {
      binaryName += capitalLetterBinary["G"];
    }
    if (ltr === "H") {
      binaryName += capitalLetterBinary["H"];
    }
    if (ltr === "I") {
      binaryName += capitalLetterBinary["I"];
    }
    if (ltr === "J") {
      binaryName += capitalLetterBinary["J"];
    }
    if (ltr === "K") {
      binaryName += capitalLetterBinary["K"];
    }
    if (ltr === "L") {
      binaryName += capitalLetterBinary["L"];
    }
    if (ltr === "M") {
      binaryName += capitalLetterBinary["M"];
    }
    if (ltr === "N") {
      binaryName += capitalLetterBinary["N"];
    }
    if (ltr === "O") {
      binaryName += capitalLetterBinary["O"];
    }
    if (ltr === "P") {
      binaryName += capitalLetterBinary["P"];
    }
    if (ltr === "Q") {
      binaryName += capitalLetterBinary["Q"];
    }
    if (ltr === "R") {
      binaryName += capitalLetterBinary["R"];
    }
    if (ltr === "S") {
      binaryName += capitalLetterBinary["S"];
    }
    if (ltr === "T") {
      binaryName += capitalLetterBinary["T"];
    }
    if (ltr === "U") {
      binaryName += capitalLetterBinary["U"];
    }
    if (ltr === "V") {
      binaryName += capitalLetterBinary["V"];
    }
    if (ltr === "W") {
      binaryName += capitalLetterBinary["W"];
    }
    if (ltr === "X") {
      binaryName += capitalLetterBinary["X"];
    }
    if (ltr === "Y") {
      binaryName += capitalLetterBinary["Y"];
    }
    if (ltr === "Z") {
      binaryName += capitalLetterBinary["Z"];
    }
    if (ltr === "a") {
      binaryName += smallLetterBinary["a"];
    }
    if (ltr === "b") {
      binaryName += smallLetterBinary["b"];
    }
    if (ltr === "c") {
      binaryName += smallLetterBinary["c"];
    }
    if (ltr === "d") {
      binaryName += smallLetterBinary["d"];
    }
    if (ltr === "e") {
      binaryName += smallLetterBinary["e"];
    }
    if (ltr === "f") {
      binaryName += smallLetterBinary["f"];
    }
    if (ltr === "g") {
      binaryName += smallLetterBinary["g"];
    }
    if (ltr === "h") {
      binaryName += smallLetterBinary["h"];
    }
    if (ltr === "i") {
      binaryName += smallLetterBinary["i"];
    }
    if (ltr === "j") {
      binaryName += smallLetterBinary["j"];
    }
    if (ltr === "k") {
      binaryName += smallLetterBinary["k"];
    }
    if (ltr === "l") {
      binaryName += smallLetterBinary["l"];
    }
    if (ltr === "m") {
      binaryName += smallLetterBinary["m"];
    }
    if (ltr === "n") {
      binaryName += smallLetterBinary["n"];
    }
    if (ltr === "o") {
      binaryName += smallLetterBinary["o"];
    }
    if (ltr === "p") {
      binaryName += smallLetterBinary["p"];
    }
    if (ltr === "q") {
      binaryName += smallLetterBinary["q"];
    }
    if (ltr === "r") {
      binaryName += smallLetterBinary["r"];
    }
    if (ltr === "s") {
      binaryName += smallLetterBinary["s"];
    }
    if (ltr === "t") {
      binaryName += smallLetterBinary["t"];
    }
    if (ltr === "u") {
      binaryName += smallLetterBinary["u"];
    }
    if (ltr === "v") {
      binaryName += smallLetterBinary["v"];
    }
    if (ltr === "w") {
      binaryName += smallLetterBinary["w"];
    }
    if (ltr === "x") {
      binaryName += smallLetterBinary["x"];
    }
    if (ltr === "y") {
      binaryName += smallLetterBinary["y"];
    }
    if (ltr === "z") {
      binaryName += smallLetterBinary["z"];
    }
  }
  output.value = binaryName;
});
