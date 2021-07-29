const api_key = "e0f35971606aa5a36e8a366acfd64ebb";
var x = document.getElementById("demo");
var city_id;

$("#city-nav-btn").on("click", async () => {
  //e.preventDefault();
  let city = $("#city-nav").val();
  let city_data = await getWeatherDataByCity(city);
  //let bar= await city_id.then(result => result.data);
  console.log(city_data);
  city_id = city_data.id;
  //console.log(city_id);
  showData();

  let lat = city_data.coord.lat;
  let lon = city_data.coord.lon;
  await getWeatherDataByCoordinate(lat, lon);
});

$("#city-body-btn").on("click", async () => {
  //e.preventDefault();
  let city = $("#city-body").val();

  let city_data = await getWeatherDataByCity(city);
  //let bar= await city_id.then(result => result.data);
  console.log(city_data);
  city_id = city_data.id;
  //console.log(city_id);
  showData();

  let lat = city_data.coord.lat;
  let lon = city_data.coord.lon;
  await getWeatherDataByCoordinate(lat, lon);
  $("#city-body").val("");
});

// $("#city-nav-btn").on("click", () => {
//   //e.preventDefault();
//   let city = $("#city-nav").val();
//   city_id = getWeatherDataByCity(city);
// });

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
//   //console.log(position);
//   getWeatherDataByCoordinate(
//     position.coords.latitude,
//     position.coords.longitude
//   );
// }

//fetch data using one call api of open weather using latitude and longitude
//extract alert issued for that area and display the alert in a card
async function getWeatherDataByCoordinate(lat, lon) {
  let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`;
  try {
    await fetch(oneCallUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        console.log(data.alerts[0]);
        let alert = data.alerts[0];
        let alertSender = alert.sender_name;
        let event = alert.event;
        let startTime = alert.start;
        let endTime = alert.end;

        let sd = new Date(startTime);
        let sHours = sd.getHours();
        sHours = sHours < 10 ? "0" + sHours : sHours;
        let tod = sHours < 12 ? "AM" : "PM";
        let sMinutes = sd.getMinutes();
        sMinutes = sMinutes < 10 ? "0" + sMinutes : sMinutes;
        startTime = sHours + ":" + sMinutes + tod;

        let ed = new Date(endTime);
        let eHours = ed.getHours();
        eHours = eHours < 10 ? "0" + eHours : eHours;
        tod = eHours < 12 ? "AM" : "PM";
        let eMinutes = ed.getMinutes();
        eMinutes = eMinutes < 10 ? "0" + eMinutes : eMinutes;
        endTime = eHours + ":" + eMinutes + tod;
        let desc = alert.description;
        let card_data = `<div class="card-header bg-danger text-white text-center p-0 h4">
      Alert By ${alertSender}
      <div class="d-flex justify-content-evenly mt-1 secondary-header">
          <p class="card-text">Event-${event}</p>
          <p class="card-text">Start-${startTime}</p>
          <p class="card-text">End-${endTime}</p>
          </div>
      </div>
  <div class="card-body">
      <p class="card-text">${desc}</p>
  </div>`;
        $(".card").html(card_data);
      });
    //console.log(data);
  } catch (error) {
    $(".card").html('');
    console.log("Error in fetching weather data by coordinate " + error);
  }
}

//fetch weather update using City name by open weather api
async function getWeatherDataByCity(Cityname) {
  let Url = `https://api.openweathermap.org/data/2.5/weather?q=${Cityname}&appid=${api_key}`;
  let weatherData;
  try {
    //  let resp = await fetch(Url)
    //  let data = await resp.json();
    //  //console.log(data);
    //  return (data.main);
    await fetch(Url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        weatherData = data;
      });
  } catch (error) {
    console.log("Error in fetching weather data by cityname " + error);
  }
  return weatherData;
}

//show weather update using open weather wizard by cityID
function showData() {
  let screenSize = $(window).width();
  const smallScreen = 678;

  if (screenSize > smallScreen) {
    //for large screen
    let lgWeatherHTML = `<div id="openweathermap-widget-11"></div>
  <script src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js"></script>`;
    $("#lgDataCard").html(lgWeatherHTML);

    window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
    window.myWidgetParam.push({
      id: 11,
      cityid: city_id,
      appid: "e0f35971606aa5a36e8a366acfd64ebb",
      units: "metric",
      containerid: "openweathermap-widget-11",
    });

    var script = document.createElement("script");
    script.async = true;
    script.src =
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
  } else {
    //for mobile device
    // mobile widget
    let smWeatherHTML = `<div id="openweathermap-widget-15"></div>`;
    $("#smDataCard").html(smWeatherHTML);
    window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);

    window.myWidgetParam.push({
      id: 15,
      cityid: city_id,
      appid: "e0f35971606aa5a36e8a366acfd64ebb",
      units: "metric",
      containerid: "openweathermap-widget-15",
    });

    var script = document.createElement("script");
    script.async = true;
    script.src =
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
  }
}
