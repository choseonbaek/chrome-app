let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDate();

document.querySelector(".year").innerText = currentYear;
document.querySelector(".month").innerText = ("0" + (currentMonth + 1)).slice(
  -2
);
document.querySelector(".day").innerText = currentDay;

document.querySelector(".mode").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("dark");
  document.querySelector("body").classList.toggle("dark");
});
