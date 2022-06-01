const box = document.querySelectorAll(".box"),
      boxArea = document.querySelector(".wrapper-area"),
      wrapperResult = document.querySelector(".wrapper-result"),
      contentResult = document.querySelector("#content"),
      closeResult = document.querySelector("#btn-close"),
      overlayResult = document.querySelector("#overlay"),
      windowResult = document.querySelector('#modal-window'),
      body = document.querySelector('body'),
      switchBtn = document.querySelector('.switch-btn'),
      h1 = document.querySelector('h1');
let move = 0,
    result = "",
    resultWord = "";

boxArea.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "0");
    move++;
    checkResult();
  }
});

function checkResult() {
  const boxes = document.querySelectorAll(".box"),
    arrOfWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  for (let i = 0; i < arrOfWin.length; i++) {
    if (
      boxes[arrOfWin[i][0]].innerHTML === "X" &&
      boxes[arrOfWin[i][1]].innerHTML === "X" &&
      boxes[arrOfWin[i][2]].innerHTML === "X"
    ) {
      resultWord = 'Победили '
      result = "крестики";
      showModal(resultWord, result);
    } else if (
      boxes[arrOfWin[i][0]].innerHTML === "0" &&
      boxes[arrOfWin[i][1]].innerHTML === "0" &&
      boxes[arrOfWin[i][2]].innerHTML === "0"
    ) {
      resultWord = 'Победили '
      result = "нолики";
      showModal(resultWord, result);
    } else if (move === 9) {
      resultWord = 'Победила '
      result = 'дружба';
      showModal(resultWord, result);
    }
  }
}

function showModal(win, winner) {
  wrapperResult.style = "display: block;";
  wrapperResult.addEventListener("click", (e) => {
    if (e.target === closeResult || e.target === overlayResult) {
      wrapperResult.style = "display: none;";
      location.reload();
    }
  });
  contentResult.innerHTML = `${win} ${winner}`;
}