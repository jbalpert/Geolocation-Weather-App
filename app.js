function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    let lowTemp = document.getElementById("lowTemp");
    let highTemp = document.getElementById("highTemp");
  
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "2ebac06e428204515ecd7dba53a66d22";
  
    location.innerHTML = "Locating...";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          temperature.innerHTML = temp + "° F";
          let weather = data.weather[0].main;
          location.innerHTML =
            data.name + " (" + latitude + "°, " + longitude + "°)";
          description.innerHTML = weather;
          if(weather === "Rain"){
              document.querySelector(".container").style.backgroundImage = "url(\"https://i.pinimg.com/474x/b1/6c/5e/b16c5e0401c77afd52aa041d5158534d.jpg\")"
            }
            else if(weather === "Clear"){
                document.querySelector(".container").style.backgroundImage = "url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXw_G0BGAj5tvJy_7tye14dYmU3CGnZDCp1g&usqp=CAU\")"
            }            
            else if(weather === "Sunny"){
                document.querySelector(".container").style.backgroundImage = "url(\"https://images.fineartamerica.com/images-medium-large-5/vertical-sunset-pati-photography.jpg\")"
            }            
            else if(weather === "Clouds"){
                document.querySelector(".container").style.backgroundImage = "url(\"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/fluffy-clouds-xxl-vertical-turnervisual.jpg\")"
            }
          lowTemp.innerHTML = "Low: " + data.main.temp_min + "° F";
          highTemp.innerHTML = "High: " + data.main.temp_max + "° F";
        });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }
  
  getWeather();