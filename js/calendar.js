//윤년계산
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
//맞다면 29일 아니라면 28일
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let calendar_header_year = document.querySelector("#year");
let month_picker = document.querySelector("#month-picker #month");
let calendar_days = document.querySelector("#days");

const generateCalendar = (month, year) => {
  calendar_days.innerHTML = "";
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  month_picker.innerHTML = month_names[month];

  calendar_header_year.innerHTML = year;

  let first_day = new Date(year, month);
  //일수 + 시작날-1
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("span");
    //시작날부터
    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;

      if (
        i - first_day.getDay() + 1 === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add("current-date");
      }
    }
    calendar_days.appendChild(day);
  }
};

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

document.querySelector("#pre-month").onclick = () => {
  --currentMonth;
  if (currentMonth < 0) {
    --currentYear;
    currentMonth = 11;
  }
  generateCalendar(currentMonth, currentYear);
};

document.querySelector("#next-month").onclick = () => {
  ++currentMonth;
  if (currentMonth > 11) {
    ++currentYear;
    currentMonth = 0;
  }
  generateCalendar(currentMonth, currentYear);
};

document.querySelector("#month").onclick = () => {
  let now = new Date();
  generateCalendar(now.getMonth(), now.getFullYear());
};

generateCalendar(currentMonth, currentYear);
