var aliveResult = '';
var deadResult = '';
var alive = [];
var dead = [];
var workingAlive = '';
var workingDead = '';
for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
  if (gameOfThronesCharacters.hasOwnProperty(i)) {
    if (gameOfThronesCharacters[i].dead === true) {
      workingDead = gameOfThronesCharacters[i].name;
      dead.push(workingDead);
    } else {
      workingAlive = gameOfThronesCharacters[i].name;
      alive.push(workingAlive);
    }
  }
}
alive.sort();
dead.sort();
aliveResult = alive.join('<br>');
deadResult = dead.join('<br>')

document.querySelector('#alive').innerHTML = aliveResult;
document.querySelector('#dead').innerHTML = deadResult;
