var characterTable = document.getElementById('characters');
var tableRow = '';
var element = document.getElementById('remove-button');


for (var i = 0; i < gameOfThronesCharacters.length; i++) {
  tableRow +=
    `
    <tr class='gotCharactersTable'>
        <td class="name">${gameOfThronesCharacters[i].name}</td>    
        <td class="image"><image src="./${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"</td>
        <td class="house">${ifExist()}</td>
        <td class="bio" id="bio_cell${i}">${gameOfThronesCharacters[i].bio}</td>
        <td class="edit-button"><button id="editButton${i}" onclick="editRow('${i}')">Edit</button><button id="saveButton${i}" onclick="saveRow(${i})">Save</button></td>
        <td class="remove-button"><button onclick="deleteRow(this)">Delete</button></td>   
    </tr>
`;
}
characterTable.innerHTML = tableRow;
for (var k = 0; k < gameOfThronesCharacters.length; k++) {
  var saveID = 'saveButton' + k;
  document.getElementById(`${saveID}`).style.display = 'none';
}


function ifExist() {
  if (gameOfThronesCharacters[i].house !== undefined) {
    return gameOfThronesCharacters[i].house;
  }
  return '';
}

function editRow(no) {
  var bio = document.getElementById('bio_cell' + no);
  var bioData = bio.innerHTML;

  bio.innerHTML = `<textarea id="bio_text${no}" class="textArea">${bioData}</textarea>`;
  document.getElementById('editButton' + no).style.display = 'none';
  document.getElementById('saveButton' + no).style.display = 'inline';
}


function deleteRow(r) {
  var j = r.parentNode.parentNode.rowIndex;
  document.getElementById('characters').deleteRow(j);
}
element.addEventListener('click', deleteRow);


function saveRow(no) {
  var bioVal = document.getElementById('bio_text' + no).value;

  document.getElementById('bio_cell' + no).innerHTML = bioVal;

  document.getElementById('saveButton' + no).style.display = 'none';
  document.getElementById('editButton' + no).style.display = 'inline';
}
