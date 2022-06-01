const box = document.querySelectorAll('.box'),
      boxArea = document.querySelector('.wrapper-area'),
      wrapperResult = document.querySelector('.wrapper-result'),
      contentResult = document.querySelector('#content'),
      closeResult = document.querySelector('#btn-close');
let move = 0,
    result = '';

boxArea.addEventListener('click', (e) => {
  if(e.target.className === 'box') {
    console.log(e.target)
    move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
    move++;
    checkResult();
  }
})

function checkResult() {
  const boxes = document.querySelectorAll('.box'),
        arrOfWin = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
  for(let i = 0; i < arrOfWin.length; i++) {
    if(
        boxes[arrOfWin[i][0]].innerHTML === 'X' && boxes[arrOfWin[i][1]].innerHTML === 'X' && boxes[arrOfWin[i][2]].innerHTML === 'X'
    ) {
      console.log('X')
    } else if (
        boxes[arrOfWin[i][0]].innerHTML === '0' && boxes[arrOfWin[i][1]].innerHTML === '0' && boxes[arrOfWin[i][2]].innerHTML === '0'
    ) {
      console.log('0')
    }
  }
}

