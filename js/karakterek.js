/* globals gameOfThronesCharacters */

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
        <td class="edit-button"><button id="editButton${i}" onclick="editDiv('${i}')">Edit</button><button id="saveButton${i}" onclick="saveDiv(${i})">Save</button></td>
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

function editDiv(no) {
  var bio = document.getElementById('bio_cell' + no);
  var bioData = bio.innerHTML;

  bio.innerHTML = `<div id="bio_text${no}" class="textArea" contentEditable>${bioData}</div>`;
  document.getElementById('bio_text' + no).focus();
  document.getElementById('editButton' + no).style.display = 'none';
  document.getElementById('saveButton' + no).style.display = 'inline';
}


function deleteRow(no) {
  var j = no.parentNode.parentNode.rowIndex;
  document.getElementById('characters').deleteRow(j);
}


function saveDiv(no) {
  document.getElementById('bio_text' + no).contentEditable = false;
  // var bioVal = document.getElementById('bio_text' + no).value;

  // document.getElementById('bio_cell' + no).innerHTML = bioVal;

  document.getElementById('saveButton' + no).style.display = 'none';
  document.getElementById('editButton' + no).style.display = 'inline';
}

element.addEventListener('click', deleteRow);
element.addEventListener('click', editDiv);
element.addEventListener('click', saveDiv);
