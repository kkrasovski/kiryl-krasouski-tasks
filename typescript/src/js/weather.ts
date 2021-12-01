const apiUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=53.8815958&lon=30.2882663&exclude=current,hourly,minutely,alerts&units=metric&appid=d255484514cca8b8009c49f36a74357e";

fetch(apiUrl)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    const daysLabelWeather: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dayOfWeekToday:number = new Date().getDay();

    if (dayOfWeekToday === 0) {
      dayOfWeekToday = 7;
    }

    for (let i = 0; i <= 7 - dayOfWeekToday; i++) {
      const weatherGrid: HTMLElement | null =
        document.querySelector(".weather__grid");
      if (!weatherGrid) throw Error("root element not found");

      const dayOfWeek: Date = new Date(data.daily[i].dt * 1000);
     
      const date: string = `${dayOfWeek.getDate()}.${dayOfWeek.getMonth()}.${dayOfWeek.getFullYear()}`;
      const temperature: string = Math.round(data.daily[i].temp.day) + "&deg;";

      const weatherDay: HTMLElement = document.createElement("div");
      weatherDay.className = "weather__for-day weather-day";

      const weatherTitle: HTMLElement = document.createElement("h2");
      weatherTitle.className = "weather-day__title";
      weatherTitle.textContent = daysLabelWeather[dayOfWeek.getDay()];

      const weatherDate: HTMLElement = document.createElement("div");
      weatherDate.className = "weather-day__date";
      weatherDate.textContent = date;

      const weatherTemperature: HTMLElement = document.createElement("div");
      weatherTemperature.className = "weather-day__temperature";
      weatherTemperature.innerHTML = temperature;

      weatherDay.append(weatherTitle);
      weatherDay.append(weatherDate);
      weatherDay.append(weatherTemperature);
      weatherGrid.append(weatherDay);
    }
  });
