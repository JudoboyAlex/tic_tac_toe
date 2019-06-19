document.addEventListener("DOMContentLoaded", function() {
  let player = "O";

  const boxes = document.querySelectorAll(".row");
  const boxOne = document.querySelector(".one");
  const boxTwo = document.querySelector(".two");
  const boxThree = document.querySelector(".three");
  const boxFour = document.querySelector(".four");
  const boxFive = document.querySelector(".five");
  const boxSix = document.querySelector(".six");
  const boxSeven = document.querySelector(".seven");
  const boxEight = document.querySelector(".eight");
  const boxNine = document.querySelector(".nine");

  function reset() {
    boxes.forEach(box => {
      box.innerText = "";
      box.classList.remove("played");
    });
  }

  function drawGame() {
    let x = document.querySelectorAll(".played").length;
    if (x >= 9 && !gameWinner()) {
      alert("DRAW");
      reset();
    }

  }

  boxes.forEach(box => {
    box.addEventListener("click", e => {
      if (!e.target.innerText && player === "X") {
        e.target.innerText = player;
        e.target.classList.add("played");
        player = "O";
        gameWinner();
      } else if (!e.target.innerText && player === "O") {
        e.target.innerText = player;
        e.target.classList.add("played");
        player = "X";
        gameWinner();
      }
      drawGame();
    });
  });

  function gameWinner() {
    if (
      boxOne.innerText === "O" &&
      boxTwo.innerText === "O" &&
      boxThree.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxOne.innerText === "X" &&
      boxTwo.innerText === "X" &&
      boxThree.innerText === "X"
    ) {
      alert("You win!!!");
    }

    if (
      boxOne.innerText === "O" &&
      boxFour.innerText === "O" &&
      boxSeven.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxOne.innerText === "X" &&
      boxFour.innerText === "X" &&
      boxSeven.innerText === "X"
    ) {
      alert("You win!!!");
    }

    if (
      boxOne.innerText === "O" &&
      boxFive.innerText === "O" &&
      boxNine.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxOne.innerText === "X" &&
      boxFive.innerText === "X" &&
      boxNine.innerText === "X"
    ) {
      alert("You win!!!");
    }

    if (
      boxTwo.innerText === "O" &&
      boxFive.innerText === "O" &&
      boxEight.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxTwo.innerText === "X" &&
      boxFive.innerText === "X" &&
      boxEight.innerText === "X"
    ) {
      alert("You win!!!");
    }

    if (
      boxThree.innerText === "O" &&
      boxSix.innerText === "O" &&
      boxNine.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxThree.innerText === "X" &&
      boxSix.innerText === "X" &&
      boxNine.innerText === "X"
    ) {
      alert("You win!!!");
    }

    if (
      boxThree.innerText === "O" &&
      boxFive.innerText === "O" &&
      boxSeven.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxThree.innerText === "X" &&
      boxFive.innerText === "X" &&
      boxSeven.innerText === "X"
    ) {
      alert("You win!!!");
    }

    if (
      boxFour.innerText === "O" &&
      boxFive.innerText === "O" &&
      boxSix.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxFour.innerText === "X" &&
      boxFive.innerText === "X" &&
      boxSix.innerText === "X"
    ) {
      alert("You win!!!");
    }

    if (
      boxSeven.innerText === "O" &&
      boxEight.innerText === "O" &&
      boxNine.innerText === "O"
    ) {
      alert("You win!!!");
    } else if (
      boxSeven.innerText === "X" &&
      boxEight.innerText === "X" &&
      boxNine.innerText === "X"
    ) {
      alert("You win!!!");
    }
  }
});
