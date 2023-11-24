/*
  Fizz Buzz
*/

const fizzBuzz = () => {
  const startVal = prompt("Enter a start value");
  const endVal = prompt("Enter a end value");
  if (isNaN(startVal) || isNaN(endVal))
    return alert("Please enter a valid number.");
  let arr = [];
  for (let i = startVal; i <= endVal; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(parseInt(i));
    }
  }
  console.log(arr);
};

/* 
  add strings and numbers
*/

const stringNumberTest = () => {
  console.log("1" + 1 + 1 + 1);
  console.log(1 + "1" + 1 + 1);
  console.log(1 + 1 + "1" + 1);
  console.log(1 + 1 + 1 + "1");
};

/*
  compare objects
*/

const compareObj = () => {
  const a = { name: "a", id: 1 };
  const b = { name: "b", id: 2 };
  const c = a;
  const d = { name: "a", id: 1 };

  console.log(a == b);
  console.log(a === b);

  console.log(a == c);
  console.log(a === c);

  console.log(a == d);
  console.log(a === d);

  console.log(JSON.stringify(a) === JSON.stringify(b));
  console.log(JSON.stringify(a) === JSON.stringify(c));
  console.log(JSON.stringify(a) === JSON.stringify(d));
};

/* 
  compare arrays
*/

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 4];

const compareArr = () => {
  if (arr1.length !== arr2.length) return console.log("Array not same");
  arr1.map((value, index) => {
    console.log(value === arr2[index]);
  });
  if (arr1.length !== arr3.length) return console.log("Array not same");
  arr1.every((value, index) => {
    console.log(value === arr3[index]);
  });
};

/*
  solve matrix to get nearest contagious of 1
*/

const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 0],
];

const getArtifacts = () => {
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
  }
  console.log(count);
};

/*
  Time optimization
*/

function findTime() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return (index) => a[index];
}

const closure = findTime();
//console.time("1000");
closure(1000);
//console.timeEnd("1000");

/*
  setTimeOut block scope
*/

function varLetScope() {
  // var vs let scope changes the outcome
  for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log("var - ", i), i * 1000);
  }
  for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log("let - ", i), i * 1000);
  }
}

/*
  Current Time
*/
setInterval(getCurrentTime, 1000);

function getCurrentTime() {
  document.getElementById("timeBtn").innerHTML = new Date().toLocaleString();
}

/*
  Random background color
*/

let colorValue = "FFFFFF";
let usedColors = [];
let timer = setInterval(generateRandomColor, 1000);

function pickRandomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

function generateRandomColor() {
  if (usedColors.length > 10) {
    clearInterval(timer);
  } else {
    if (usedColors.includes(colorValue)) {
      colorValue = pickRandomColor();
    }
    usedColors.push(colorValue);
  }
  document.getElementById("main").style.backgroundColor = colorValue;
}
