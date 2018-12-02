var selectedHouses = [];
var countedHouses = [];
var writeToPage = document.querySelector('#housesTable');

for (var k in gameOfThronesCharacters) {
  if (gameOfThronesCharacters[k].organization) {
    if (!selectedHouses.includes(gameOfThronesCharacters[k].organization))  {
      selectedHouses.push(gameOfThronesCharacters[k].organization);
    }
  }
}

for (var i = 0; i < selectedHouses.length; i += 1) {
  countedHouses[i] = [];
  countedHouses[i][2] = 0;
}
for (var k in selectedHouses) {
  if (selectedHouses.hasOwnProperty(k)) {
    for (var j in gameOfThronesCharacters) {
      if (gameOfThronesCharacters[j].organization) {
        if (selectedHouses[k] === gameOfThronesCharacters[j].organization) {
          countedHouses[k][0] = './img/houses/' + gameOfThronesCharacters[j].organization + '.png';
          countedHouses[k][1] = gameOfThronesCharacters[j].organization.charAt(0).toUpperCase() + gameOfThronesCharacters[j].organization.substr(1).toLowerCase();
          countedHouses[k][2] += 1;
        } else {
          continue;
        }
      }
    }
  }
}

for (k in countedHouses) {
  if (countedHouses.hasOwnProperty(k)) {
    writeToPage.innerHTML += `
<tr>
  <td><img src="${countedHouses[k][0]}" alt="${countedHouses[k][1]} organization coat of arms"></td>
  <td>${countedHouses[k][1]}</td>
  <td>${countedHouses[k][2]}</td>
</tr>
`;
  }
}
