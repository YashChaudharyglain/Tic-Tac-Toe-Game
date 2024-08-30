let boxes = document.querySelectorAll(".box");
let xBtn = document.querySelector(".x-btn");
let oBtn = document.querySelector(".o-btn");
let display = document.querySelector(".display");
let ttt = document.querySelector(".container");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newgame");
let count=0;
let noWinner=true;

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
];

newGame.classList.add("hide");


let turn;
xBtn.addEventListener("click", () => {
  turn = false;
});

oBtn.addEventListener("click", () => {
  turn = true;
});

reset.classList.add("hide");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    
    
    reset.classList.remove("hide");
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    winner();
  
    
    if( count==9){
      if(noWinner){
      display.innerText='its a tie'
      count=0;
      reset.classList.add("hide");
      newGame.classList.remove('hide');

      }
    }
  });
});

const winner = () => {
  for (let pattern of winningPattern) {

    let pos1 = boxes[pattern[0]];
    let pos2 = boxes[pattern[1]];
    let pos3 = boxes[pattern[2]];

    if (pos1.innerText != "" && pos2.innerText != "" && pos3.innerText != "") {
      if (
        pos1.innerText === pos2.innerText &&
        pos2.innerText === pos3.innerText
      ) {
        noWinner=false;

        display.innerText = `Winner is ${pos1.innerText}`;
        disable();
        reset.classList.add("hide");
        newGame.classList.remove('hide');
      }
     
    }
    
  }
};



const disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

reset.addEventListener("click", () => {
  for (let box of boxes) {
    display.innerText='';
    box.innerText = "";
    count=0;
    box.disabled = false;
  }
});

reset.addEventListener('click',() => {
  for (let box of boxes){
    if(box.innerText===''){
      reset.classList.add("hide");
    }
  }
}
)



newGame.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    display.innerText='';
    count=0;
    box.disabled = false;
  }
});

newGame.addEventListener('click',() => {
    newGame.classList.add('hide');
}
)
