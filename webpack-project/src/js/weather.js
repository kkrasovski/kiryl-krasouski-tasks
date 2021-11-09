const apiUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=53.8815958&lon=30.2882663&exclude=current,hourly,minutely,alerts&units=metric&appid=d255484514cca8b8009c49f36a74357e";

fetch(apiUrl)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    const daysLabelWeather = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dayOfWeekToday = new Date().getDay();
    if (dayOfWeekToday === 0) {
      dayOfWeekToday = 7;
    }

    for (let i = 0; i <= 7 - dayOfWeekToday; i++) {
      const weatherGrid = document.querySelector(".weather__grid");
      const dayOfWeek = new Date(data.daily[i].dt * 1000);
      const date = `${dayOfWeek.getDate()}.${dayOfWeek.getMonth()}.${dayOfWeek.getFullYear()}`;
      const temperature = Math.round(data.daily[i].temp.day) + "&deg;";
      console.log;

      const weatherDay = document.createElement("div");
      weatherDay.className = "weather__for-day weather-day";

      const weatherTitle = document.createElement("h2");
      weatherTitle.className = "weather-day__title";
      weatherTitle.textContent = daysLabelWeather[dayOfWeek.getDay()];

      const weatherDate = document.createElement("div");
      weatherDate.className = "weather-day__date";
      weatherDate.textContent = date;

      const weatherTemperature = document.createElement("div");
      weatherTemperature.className = "weather-day__temperature";
      weatherTemperature.innerHTML = temperature;

      weatherDay.append(weatherTitle);
      weatherDay.append(weatherDate);
      weatherDay.append(weatherTemperature);

      weatherGrid.append(weatherDay);
    }
  })
  .catch(function () {});
