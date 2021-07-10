import refs from './get-refs';
import countriesTpl from '../templates/countries.hbs';

function renderCountriesList(country) {
  const markup = countriesTpl(country);
  refs.containerEl.innerHTML = markup;
}

export default renderCountriesList;
