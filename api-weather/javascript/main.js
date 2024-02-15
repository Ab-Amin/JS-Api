// api key : 597bf8bff952f9d750b242888f66cfc7

// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })


let wrapper = document.querySelector('.wrapper')
let select = document.querySelector('select')
let info = document.querySelector('.mini-wrapper')

function meteo(contry) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${contry}&appid=c65b019fe59221617776cb635070de57&lang=en`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      // data.main.temp =>°C = K - 273.15
      // data.main.humidity 
      // data.weather.main
      // data.weather.0.description

      let celcius = (data.main.temp - 273.15).toFixed(1) + "°"
      info.innerHTML = `
      <h1>${data.name}</h1>
      <p>⛅ Situation météo : <strong>${data.weather[0].description}</strong></p>
      <p>🌡️ Température actuelle : <strong>${celcius}</strong></p>
      <p>💧 Taux d'humidité : <strong>${data.main.humidity}%</strong></p>
      `
      
      
  
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })
  
}


select.addEventListener('change', function () {
  meteo(select.value)
})











