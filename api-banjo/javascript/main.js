let profiles = document.querySelector('.profiles');
let profile = document.querySelector('.profileInfo');
let images = document.querySelectorAll('.imgProfiles');


function banjoProfiles() {
  fetch(`datas.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // i, pour numéroter chaque personnes et pouvoir afficher qui on veux plus tard  
    // Aurait pu aussi utiliser les 'id' qui sont deja dans le tableau pour chaque personnes 
    data.users.forEach(function(user, i) {
      profiles.innerHTML += `<img class="imgProfiles" src="${user.image}" data-index=${i} title="${user.name}" alt="">`
    })

    // Fonction qui affichera les infos d'un utilisateur
    function banjoProfileInfo(nbr) {
      profile.innerHTML = `
      <img src="${data.users[nbr].image}" alt="">
      <h2>${data.users[nbr].name}</h2>
      <p>${data.users[nbr].age} ans</p>
      <p>${data.users[nbr].address.street} - ${data.users[nbr].address.city} (${data.users[nbr].address.country})</p>
      `
    }


    addEventListener('click', function(e) {
      if (e.target.classList.contains('imgProfiles')) {
        dataIndex = e.target.getAttribute('data-index');
        console.log(dataIndex);
        console.log('click');
    
        banjoProfileInfo(dataIndex)

        // Si j'avais use id au lieu de data index :
        // Au lieu de data-index=${i} dans profiles.innerHTML ==> data-userid="${user.id}"
        // Et appeler banjoProfileInfo comme ça :
        // banjoProfileInfo(data.users[e.target.getAttribute('data-userid') - 1])
        // - 1 car les id dans tableau commence par 1 et non par 0
      }

    });
    
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})
}

banjoProfiles()
















