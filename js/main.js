// import data from '/json/quote.js';
// let quotes = data;

const quotes = [
  {
    number: "1",
    author: "키케로",
    quote: " 삶이 있는 한 희망은 있다",
  },
  {
    number: "2",
    author: "로망로랑",
    quote: "산다는것 그것은 치열한 전투이다",
  },
  {
    number: "3",
    author: "사무엘존슨",
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
  },
  {
    number: "4",
    author: "파울로 코엘료",
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
  },
  {
    number: "5",
    author: "찰리 채플린",
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
  },
];

const quoteBtn = document.getElementById("quoteBtn");
const quote = document.querySelector("#quote");
const logOut = document.getElementById("logOut");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("Input");

const USERNAME_KEY = "userName";
const HIDDEN_CLASS = "hidden";

function randomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = randomQuote.quote + " - " + randomQuote.author;
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
