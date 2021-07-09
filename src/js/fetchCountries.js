// const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

// function fetchCountries(searchQuery) {
//   return fetch(`${BASE_URL}${searchQuery}`).then(responce => {
//     return responce.json();
//   });
// }

import countryTpl from '../templates/country.hbs';

const refs = {
  cardContainer: document.querySelector('.js-container'),
};

const r = fetch('https://restcountries.eu/rest/v2/name/ukraine')
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
    const markup = countryTpl(country);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
