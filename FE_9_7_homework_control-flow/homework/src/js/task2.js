let start = confirm('Do you want to play a game?');
let rnumber = 6;
let numchange = 1;
let replayGame;
let prize = 10;
let firstGameMaxPrize = 10;
let totalPrize = 0;
let firstGameMaxRandomNum = 6;
let firstAttempt = 1;

if (!start) {
  alert(`You did not become a millionaire, but can.`);

} else {
  for (let i = 0; ; i++) {
    if (i > 0 && i % 2 !== 0) {
      if (k % 3 === 0) {
        let replayGame = confirm('Do you want to play again?');
        if (!replayGame) {
          break;
        } else if (replayGame) {
          prize = firstGameMaxPrize;
          rnumber = firstGameMaxRandomNum;
          continue;
        }
      }
      let repeat = confirm('Congratulation! Your prize is: ' + totalPrize + '$' +
        '\nDo you want to continue?');
      if (!repeat) {
        alert('Thank you for a game. Your prize is: ' + totalPrize + '$');
        replayGame = confirm('Do you want to play again?');
        if (!replayGame) {
          break;
        } else if (replayGame) {
          totalPrize = 0;
          prize = firstGameMaxPrize;
          rnumber = firstGameMaxRandomNum;
          continue;
        }
      } else if (repeat) {
        prize = prize * 3;
        rnumber = rnumber * 2 - numchange;
        continue;
      }
    }
    var k = 1;
    let randomNumber = Math.floor(Math.random() * rnumber);
    for (let attempts = 1, possiblePrize = prize; attempts < 4; attempts++ , k++) {
      let userNumber = prompt('Enter a number from 0 to ' + (rnumber - numchange) +
        '\nAttemps left: ' + (4 - attempts) +
        '\nTotal prize: ' + totalPrize + '$' +
        '\nPossible prize on current attempt: ' + possiblePrize + '$');
      possiblePrize = Math.floor(possiblePrize / 2);
      let NaNCheck = isNaN(parseFloat(userNumber));
      if (+userNumber === randomNumber && attempts === firstAttempt && !NaNCheck) {
        totalPrize += prize;
        break;
      } else if (+userNumber === randomNumber && attempts === 2 && !NaNCheck) {
        totalPrize += prize / 2;
        break;
      } else if (+userNumber === randomNumber && attempts === 3 && !NaNCheck) {
        k++;
        totalPrize += Math.floor(prize / 4);
        break;
      } else if (+userNumber !== randomNumber && attempts === 3 || NaNCheck && attempts === 3) {
        totalPrize = 0;
        alert('Thank you for a game. Your prize is: ' + totalPrize + '$');
        break;
      }
    }
  }
}