import API from './fetch-countries.js';
import refs from './get-refs';

import renderCountryCard from './country-cards.js';
import renderCountriesList from './countries-list.js';

import { alert, notice, success, error } from '../../node_modules/@pnotify/core';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';

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
          renderCountriesList(country);
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

// Что-то пошло не так! Пожалуйста, введите действительное название страны.
function onFetchError() {
  error({
    text: 'Something went wrong! Please enter a valid country name.',
  });
}

// Найдено слишком много совпадений. Пожалуйста, введите более конкретный запрос!
function onManyMatchesFound() {
  notice({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

// Пожалуйста, введите более конкретный запрос!
function onSpecificEnoughAlert() {
  alert({
    text: 'Please enter a more specific query!',
  });
}

// Поздравляю! Вы нашли страну.
function onSuccessFullRequest() {
  success({
    text: 'Congratulations! You Found the country.',
  });
}
