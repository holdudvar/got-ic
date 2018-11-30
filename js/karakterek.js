var characterTable = document.getElementById('characters');
var tableRow = '';
var element = document.getElementById('remove-button');

for (var i = 0; i < gameOfThronesCharacters.length; i++) {
  tableRow +=
        `
    <tr class='gotCharactersTable'>
        <td class="name">${gameOfThronesCharacters[i].name}</td>    
        <td class=""><image src="./${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"</td>
        <td class="house">${ifExist()}</td>
        <td class="bio">${gameOfThronesCharacters[i].bio}</td>
        <td class="edit-button" ><button>Edit</button></td>
        <td class="remove-button" onclick="deleteRow(this)"><button>Delete</button></td>   
    </tr>
`;
}
characterTable.innerHTML = tableRow;

function ifExist() {
  if (gameOfThronesCharacters[i].house !== undefined) {
    return gameOfThronesCharacters[i].house;
  }
  return '';
}

function deleteRow(r) {
  var k = r.parentNode.rowIndex;
  document.getElementById('characters').deleteRow(k);
}
element.addEventListener('click', deleteRow);
