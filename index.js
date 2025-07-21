const bigcontainer = document.querySelector(".bigcontainer");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
const result = document.querySelector(".result");

boxes.forEach((box) => {
  box.onclick = function () {
    const index4 = [...this.parentElement.children].indexOf(this);
    turnfunction(box, index4);
  };
});

function turnfunction(box, index4) {
  if (turn0) {
    box.innerText = "O";
    turn0 = false;
    removeelement(index4);
    console.log(index4);
    console.log(array);
    winchecker(false);
    setTimeout(computer, 500);
    box.disabled = true;
  }
}

let string = "012345678";
let array = [...string];
console.log(array);

randomnum = () => {
  let randomindex = Math.floor(Math.random() * array.length);
  let randomelement = array[randomindex];
  return randomelement;
};

function removeElementByValue(arr, value) {
  return arr.filter((element) => element !== value);
}

function removeelement(index) {
  array = removeElementByValue(array, index);
}

let turn0 = true;
if (turn0) {
  player1 = "O";
} else {
  player1 = "X";
}

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

computer = () => {
  let index1 = randomnum();

  console.log(index1);
  console.log(array.length);

  boxes[index1].innerText = "X";

  removeelement(index1);
  
  boxes[index1].disabled = true;
  console.log(array);

  turn0 = true;
  winchecker();
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.removeAttribute("disabled");
    array = [...string];
    turn0 = true;
    result.innerText = "";
  });
});

const winchecker = () => {
  for (pattern of winpattern) {
    if (
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[2]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[0]].innerText !== ""
    ) {
      result.innerText = `winner is ${boxes[pattern[0]].innerText}`;

      stoper();
      break;
      result.innerText= "tie";
    } 
  }
};
const stoper = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};