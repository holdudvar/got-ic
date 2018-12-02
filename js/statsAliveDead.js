var alive = [];
var dead = [];
var aliveCount = 0;
var deadCount = 0;
for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
  if (gameOfThronesCharacters.hasOwnProperty(i)) {
    if (gameOfThronesCharacters[i].dead === true) {
      dead.push(gameOfThronesCharacters[i].name);
      deadCount += 1;
    } else {
      alive.push(gameOfThronesCharacters[i].name);
      aliveCount += 1;
    }
  }
}

alive.sort();
dead.sort();

dead.push('<br> Halott karakterek összesen: ' + deadCount);
alive.push('<br> Élő karakterek összesen: ' + aliveCount);

document.querySelector('#alive').innerHTML = alive.join('<br>');
document.querySelector('#dead').innerHTML = dead.join('<br>');
