import { alert, notice, success, error } from '../../node_modules/@pnotify/core';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';

// Что-то пошло не так! Пожалуйста, введите действительное название страны.
export function onFetchError() {
  error({
    text: 'Something went wrong! Please enter a valid country name.',
  });
}

// Найдено слишком много совпадений. Пожалуйста, введите более конкретный запрос!
export function onManyMatchesFound() {
  notice({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

// Пожалуйста, введите более конкретный запрос!
export function onSpecificEnoughAlert() {
  alert({
    text: 'Please enter a more specific query!',
  });
}

// Поздравляю! Вы нашли страну.
export function onSuccessFullRequest() {
  success({
    text: 'Congratulations! You Found the country.',
  });
}
