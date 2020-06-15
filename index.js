var nameOne = window.prompt('Enter 1st player:')
var nameTwo = window.prompt('Enter 2nd player:')
document.querySelector('.p1').innerText = nameOne;
document.querySelector('.p2').innerText = nameTwo;

function randomOneSix() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber
}

function randomPic() {
  var newPic = 'images/dice' + randomOneSix() + '.png'
  return newPic;
}

var dicePlayerOne = document.querySelector('.img1')
var dicePlayerTwo = document.querySelector('.img2')

function newDices() {
  dicePlayerOne.setAttribute('src', randomPic());
  dicePlayerTwo.setAttribute('src', randomPic());
  winnerH1();
}


function winnerH1() {
  var p1 = dicePlayerOne.getAttribute('src')
  p1 = p1.slice(p1.length - 5, p1.length - 4)
  var p2 = dicePlayerTwo.getAttribute('src')
  p2 = p2.slice(p2.length - 5, p2.length - 4)
  if (p1 > p2) {
    document.querySelector('h1').innerText = '🚩 ' + nameOne + ' won'
  } else if (p1 < p2) {
    document.querySelector('h1').innerText = nameTwo + ' won 🚩'
  } else {
    document.querySelector('h1').innerText = 'There is a tie...'
  }
}
