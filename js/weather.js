const API_KEY = "93ed1557e49337bc4bcc4c4fea7e0877";

const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    // console.log(position);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("You live in", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => {

        // console.log(data.name, data.weather[0].main);
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    });

}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  // 브라우저 위치 좌표

