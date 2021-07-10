import refs from './get-refs';
import countryTpl from '../templates/country.hbs';

function renderCountryCard(country) {
  const markup = countryTpl(country);
  refs.containerEl.innerHTML = markup;
}

export default renderCountryCard;
