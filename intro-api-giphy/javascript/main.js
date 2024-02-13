// api key : GEmjEES5bxqnnyJA6fETMXMRRlq8ssOX

// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })

let chercher = document.querySelector('.button')


// function giphy(){
  fetch(`https://api.giphy.com/v1/gifs/trending?api_key=GEmjEES5bxqnnyJA6fETMXMRRlq8ssOX`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data);
      data.data.forEach(gif => {
        document.querySelector('.wrapper').innerHTML += `
        <img src="${gif.images.downsized.url}">
        `
      });
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })
// }

 
fetch(`api.giphy.com/v1/gifs/search?api_key=GEmjEES5bxqnnyJA6fETMXMRRlq8ssOX`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})


// chercher.addEventListener('click', function(){
//   giphy()
// })













