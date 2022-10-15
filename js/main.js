import data from 'json/quote.js';
let quotes = data;

const quoteBtn = document.getElementById('quoteBtn');
const quote = document.querySelector('#quote')
const logOut = document.getElementById('logOut');
const loginForm = document.getElementById('login-form')
const loginInput = loginForm.querySelector('Input')

const USERNAME_KEY = "userName"
const HIDDEN_CLASS = "hidden"

function randomQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerText = randomQuote.quote + " - " + randomQuote.author 
}

logOut.addEventListener("click", function () {
  localStorage.clear();
  document.querySelector("#main-container").classList.add(HIDDEN_CLASS);
  window.location.reload();
});

loginForm.addEventListener("submit", function () {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  showApp();
});

function showApp() {
  loginForm.classList.add(HIDDEN_CLASS);
  document.querySelector("#main-container").classList.remove(HIDDEN_CLASS);
  document.querySelector("#userName span").innerText =
    localStorage.getItem(USERNAME_KEY);
}

if (localStorage.getItem(USERNAME_KEY)) {
  showApp();
}

randomQuote();
