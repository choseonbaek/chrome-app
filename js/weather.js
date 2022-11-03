const API_KEY = "eba2841b71eafab4c9be7a82e3cb604e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather");
      const text = `${data.name}, ${data.weather[0].main} ${Math.floor(
        data.main.temp
      )}°C`;
      weather.innerText = text;
    });
}
function onGeoEroor() {
  weather.innerText = "위치 정보를 찾을 수 없습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEroor);
