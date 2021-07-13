import API from './fetch-countries.js';
import refs from './get-refs';

import renderCountryCard from './country-cards.js';
import renderCountriesList from './countries-list.js';
import {
  onFetchError,
  onManyMatchesFound,
  onSpecificEnoughAlert,
  onSuccessFullRequest,
} from './notifications.js';

const debouncedonSearch = _.debounce(onSearch, 500);

refs.inputEl.addEventListener('input', debouncedonSearch);

function onSearch(evt) {
  evt.preventDefault();
  clearCountriesList();

  const searcQuery = evt.target.value.trim();

  if (searcQuery) {
    API.fetchCountries(searcQuery)
      .then(country => {
        if (country.length === 1) {
          renderCountryCard(country);
          onSuccessFullRequest();
        } else if (country.length <= 10) {
          renderCountriesList(country);
          onSpecificEnoughAlert();
        } else if (country.length > 10) {
          // renderCountriesList(country);
          onManyMatchesFound();
        } else if (country.status === 404) {
          onFetchError();
        }
        return;
      })
      .catch(err => {
        onFetchError();
      });
  }
}

function clearCountriesList() {
  refs.containerEl.innerHTML = '';
}
