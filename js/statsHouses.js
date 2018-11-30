var editedCharacters = gameOfThronesCharacters;
var countedHouses = [];
var writeToPage = document.querySelector('#housesTable');
for (var i = 0; i < 9; i += 1) {
  countedHouses[i] = [];
  countedHouses[i][2] = 0;
}
for (var k in editedCharacters) {
  if (editedCharacters.hasOwnProperty(k)) {
    switch (editedCharacters[k].house) {
    case 'baratheon':
      editedCharacters[k].housePic = './img/houses/baratheon.png';
      countedHouses[0][0] = editedCharacters[k].housePic;
      countedHouses[0][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[0][2] += 1;
      break;
    case 'clegane':
      editedCharacters[k].housePic = './img/houses/clegane.png';
      countedHouses[1][0] = editedCharacters[k].housePic;
      countedHouses[1][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[1][2] += 1;
      break;
    case 'greyjoy':
      editedCharacters[k].housePic = './img/houses/greyjoy.png';
      countedHouses[2][0] = editedCharacters[k].housePic;
      countedHouses[2][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[2][2] += 1;
      break;
    case 'lannister':
      editedCharacters[k].housePic = './img/houses/lannister.png';
      countedHouses[3][0] = editedCharacters[k].housePic;
      countedHouses[3][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[3][2] += 1;
      break;
    case 'mormont':
      editedCharacters[k].housePic = './img/houses/mormont.png';
      countedHouses[4][0] = editedCharacters[k].housePic;
      countedHouses[4][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[4][2] += 1;
      break;
    case 'stark':
      editedCharacters[k].housePic = './img/houses/stark.png';
      countedHouses[5][0] = editedCharacters[k].housePic;
      countedHouses[5][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[5][2] += 1;
      break;
    case 'targaryen':
      editedCharacters[k].housePic = './img/houses/targaryen.png';
      countedHouses[6][0] = editedCharacters[k].housePic;
      countedHouses[6][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[6][2] += 1;
      break;
    case 'tarly':
      editedCharacters[k].housePic = './img/houses/tarly.png';
      countedHouses[7][0] = editedCharacters[k].housePic;
      countedHouses[7][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[7][2] += 1;
      break;
    case 'tully':
      editedCharacters[k].housePic = './img/houses/tully.png';
      countedHouses[8][0] = editedCharacters[k].housePic;
      countedHouses[8][1] = editedCharacters[k].house.charAt(0).toUpperCase() + editedCharacters[k].house.substr(1).toLowerCase();
      countedHouses[8][2] += 1;
      break;
    default:
      continue;
    }
  }
}
for (k in countedHouses) {
  if (countedHouses.hasOwnProperty(k)) {
    writeToPage.innerHTML += `
<tr>
  <td><img src="${countedHouses[k][0]}" alt="${countedHouses[k][1]} house coat of arms"></td>
  <td>${countedHouses[k][1]}</td>
  <td>${countedHouses[k][2]}</td>
</tr>
`;
  }
}
