var alive = [];
var dead = [];
for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
  if (gameOfThronesCharacters.hasOwnProperty(i)) {
    if (gameOfThronesCharacters[i].dead === true) {
      dead.push(gameOfThronesCharacters[i].name);
    } else {
      alive.push(gameOfThronesCharacters[i].name);
    }
  }
}
alive.sort();
dead.sort();
document.querySelector('#alive').innerHTML = alive.join('<br>');
document.querySelector('#dead').innerHTML = dead.join('<br>');
