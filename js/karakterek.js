var characterTable = document.getElementById('characters');
var tableRow = '';
for (var i = 0; i < gameOfThronesCharacters.length; i++) {
  tableRow +=
        `
    <tr class='gotCharactersTable'>
        <td class="name">${gameOfThronesCharacters[i].name}</td>    
        <td class=""><image src="./${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"</td>
        <td class="house">${gameOfThronesCharacters[i].house}}</td>
        <td class="bio">${gameOfThronesCharacters[i].bio}</td>
        <td class="edit-button"><button>Edit</button></td>
        <td class="delete-button"><button>Delete</button></td>   
    </tr>
`;
}
characterTable.innerHTML = tableRow;
