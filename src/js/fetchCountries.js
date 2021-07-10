import API from './api-service.js';
import refs from './get-refs';
import renderCountryCard from './country-cards.js';
import renderCountriesList from './countries-list.js';

refs.inputEl.addEventListener('input', onSearch);

function onSearch(e) {
  e.preventDefault();

  const swatchEl = e.target;
  const valueSwatchEl = swatchEl.value;

  API.fetchCountries(valueSwatchEl)
    .then(country => {
      if (country.length === 1) {
        refs.cardContainer.innerHTML = '';
        renderCountryCard(country);
      }
      if (country.length > 1) {
        renderCountriesList(country);
      }
    })
    .catch(onFetchError);
}

function onFetchError(error) {
  console.log('ERROR');
}
