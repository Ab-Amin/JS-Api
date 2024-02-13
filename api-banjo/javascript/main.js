
let profiles = document.querySelector('.profiles')


fetch(`datas.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(element => {
      profiles.innerHTML += `<img src="img/${image}" alt="">`
      
    });
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})
















