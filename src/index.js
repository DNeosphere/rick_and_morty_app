function stringTemplate({ image, name, species, status }) {
  return `
        <div class="characters__item">
            <img src="${image}" alt="Rick and Morty Character">
            <p>
            Name: ${name} <br>
            Species: ${species} <br>
            Status: ${status}
            </p>
        </div>
        `;
}

/* function createTemplate (HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML =   HTMLString;
    return html.body.children[0]
    } */

/* Get data */
const API_URL = "https://rickandmortyapi.com/api/character/";

const getData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function createCharacters(data) {
    const $sectionCharacter = document.querySelector(".characters");
    const characterList = data.results.map(character => {
        return stringTemplate(character);
    });
    console.log(characterList)
    $sectionCharacter.innerHTML = characterList.join('')
  }

getData(API_URL)
  .then(createCharacters)
  .catch(error => console.log(error));


