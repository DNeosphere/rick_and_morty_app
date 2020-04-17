const API = 'https://reqres.in/api/users/'

const createTemplate = ({email, first_name, last_name, avatar}) => {
    return `
    <div class="characters__item">
        <img src="${avatar}" alt="Rick and Morty Character">
        <p>
            Name: ${first_name} ${last_name} <br>
            email: ${email} <br>
        </p>
    </div>
    `;
};


const fetchData = async (url_api) => {
  const response =  await fetch(url_api)
  const data = await response.json()
  return data
}



function createUser(data) {
  const htmlString = data.data.map(user => {
    return createTemplate(user)
  })
  const $section = document.querySelector('.characters')
  $section.innerHTML = htmlString.join('')
}

fetchData(API)
  .then(createUser)
  .catch( (error) => console.log('Something wrong happened'))

