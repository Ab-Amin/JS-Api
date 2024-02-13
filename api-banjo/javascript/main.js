let profiles = document.querySelector('.profiles');
let profile = document.querySelector('.profileInfo');
let images = document.querySelectorAll('.imgProfiles');


function banjoProfiles() {
  fetch(`datas.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.users.forEach(function(user, i) {
      profiles.innerHTML += `<img class="imgProfiles" src="${user.image}" data-index=${i} alt="">`
    })

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
      }

    });
    
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})
}

banjoProfiles()
















