import API from './fetch-countries.js';
import refs from './get-refs';
import renderCountryCard from './country-cards.js';
import renderCountriesList from './countries-list.js';

const debouncedonSearch = _.debounce(onSearch, 500);

refs.inputEl.addEventListener('input', debouncedonSearch);

function onSearch(e) {
  e.preventDefault();

  const swatchEl = e.target;
  const valueSwatchEl = swatchEl.value;

  API.fetchCountries(valueSwatchEl)
    .then(country => {
      if (country.length === 1) {
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
