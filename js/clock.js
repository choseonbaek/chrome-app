const day = document.querySelector("#today span:nth-child(1)")
const clock = document.querySelector("#today span:nth-child(2)")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`
}

function getDay() {
    const date = new Date()
    const years = String(date.getFullYear()).padStart(4, "0")
    const months = String(date.getMonth() + 1).padStart(2, "0")
    const days = String(date.getDate()).padStart(2, "0")
    day.innerText = `${years}년 ${months}월 ${days}일`
}

getDay()
getClock()
setInterval(getClock, 1000)

const API_KEY = "eba2841b71eafab4c9be7a82e3cb604e"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather")
            const text =  `${data.name}, ${data.weather[0].main} ${Math.floor(data.main.temp)}°C`;
            weather.innerText = text;
        });
}
function onGeoEroor() {
    weather.innerText = "위치 정보를 찾을 수 없습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEroor)