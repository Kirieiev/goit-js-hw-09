'use strict';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onTextField);

function onFormSubmit(event) {
  event.preventDefault();
  if (input.value !== '' && textarea.value !== '') {
    localStorage.removeItem(STORAGE_KEY);
    console.log({ email: input.value.trim(), message: textarea.value.trim() });
    event.currentTarget.reset();
  }
}

function onTextField(event) {
  const savedFieldItem = localStorage.getItem(STORAGE_KEY);
  const parsedFieldItem = JSON.parse(savedFieldItem);
  const formFieldItems = {
    input: parsedFieldItem?.input,
    textarea: parsedFieldItem?.textarea,
  };
  if (event.target.tagName === 'INPUT') {
    const inputValue = event.target.value.trim();
    formFieldItems.input = inputValue;
  } else if (event.target.tagName === 'TEXTAREA') {
    const textareaValue = event.target.value.trim();
    formFieldItems.textarea = textareaValue;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formFieldItems));
}

const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

const savedInput = storedData?.input ? storedData.input : '';
const savedTextarea = storedData?.textarea ? storedData.textarea : '';

input.value = savedInput;
textarea.value = savedTextarea;
