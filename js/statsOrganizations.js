var editedCharacters = gameOfThronesCharacters;
var countedHouses = [];
var writeToPage = document.querySelector('#housesTable');
for (var i = 0; i < 2; i += 1) {
  countedHouses[i] = [];
  countedHouses[i][2] = 0;
}
for (var k in editedCharacters) {
  if (editedCharacters.hasOwnProperty(k)) {
    switch (editedCharacters[k].organization) {
    case 'nightwatch':
      editedCharacters[k].housePic = './img/houses/nightwatch.png';
      countedHouses[0][0] = editedCharacters[k].housePic;
      countedHouses[0][1] = editedCharacters[k].organization.charAt(0).toUpperCase() + editedCharacters[k].organization.substr(1).toLowerCase();
      countedHouses[0][2] += 1;
      break;
    case 'royalguard':
      editedCharacters[k].housePic = './img/houses/royalguard.png';
      countedHouses[1][0] = editedCharacters[k].housePic;
      countedHouses[1][1] = editedCharacters[k].organization.charAt(0).toUpperCase() + editedCharacters[k].organization.substr(1).toLowerCase();
      countedHouses[1][2] += 1;
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
