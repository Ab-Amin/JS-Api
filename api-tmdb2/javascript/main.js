// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })


let buttonNav = document.querySelector('nav')
let section = document.querySelector('section')

let nextPage = document.querySelector('.next--page')
let prevPage = document.querySelector('.previous--page')
let pagesInfo = document.querySelector('.pagesInfo')
let pageSelect = document.querySelector('.pageSelect')
let currentPage = document.querySelector('.currentPage')
let nextPageSelect = document.querySelector('.nextPageSelect')

let tvShow = document.querySelector('.tv-show')
let infoWindow = document.querySelector('.infoWindow')
let xdelete = document.querySelector('.delete')

let pageNbr = 1;

// top_rated
// popular
// on_the_air
// airing_today
function topRated(type, pageNbr) {

  fetch(`https://api.themoviedb.org/3/tv/${type}?include_adult=false&language=fr-fr&page=${pageNbr}&api_key=6631e5f1dc96088e0d26b86da29b5b6a&query`)
  
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // (Ajout perso) =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=--=
      console.log(`current page : ${data.page}`);
      console.log(`total pages : ${data.total_pages}`);
      console.log("=-=-=-=-=-=-=-=--=");

      currentPage.innerHTML = `(${data.page})`
      nextPageSelect.innerHTML = `${data.total_pages} `

      // Si total des page >= 2 --> affiche boutton nextPage dans page 1
      // Sinon les bouttons restent cachés
      if (data.total_pages >= 2){
        nextPage.classList.remove('hidden')
      } else {
        nextPage.classList.add('hidden')
        prevPage.classList.add('hidden')
        pagesInfo.classList.add('hidden')
      }

      // Si current page == 1 --> cacher boutton prevPage (pour pas allez dans les négatif et tout faire buggé)
      // Et Si current page >= 2 --> affiche les 2 bouttons
      if (data.page == 1){
        prevPage.classList.add('hidden')
        pagesInfo.classList.add('hidden')
      } else if (data.page >= 2) {
        nextPage.classList.remove('hidden')
        prevPage.classList.remove('hidden')
        pagesInfo.classList.remove('hidden')
      }
      
      // Si on est arrivé à la page max --> cache le boutton nextPage 
      if (data.page == data.total_pages) {
        nextPage.classList.add('hidden')
      }
      // (Ajout perso) =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=--=

      for (let i = 0; i < data.results.length; i++) {
        section.innerHTML += `
        <div class="tv-show" data-number="${i}">

          <h2 class="show-name">${data.results[i].name}</h2>
          <div class="imgDesc">
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
            <div class="desc">
              <p><small style="font-size:20px;">rating : </small>${(data.results[i].vote_average).toFixed(1)}/10</p>
            </div>
          </div>
          
        </div>
        `
      }

      // Fonction pour la pop-up avec dataNbr qui est donnée gràce à data-number dans le for ↑
      // Comme ça on a les meme info dans la serie cliqué et la pop-up (en gros le i = dataNbr)
      function popUpWindow(dataNbr) {
        infoWindow.innerHTML =  `
        <div class="infoWindow--img">
          <div class="delete">X</div>
          <img src="https://image.tmdb.org/t/p/w500/${data.results[dataNbr].poster_path}" alt="">
        </div>
        <div class="infoWindow--info">
          <div>
            <h2>${data.results[dataNbr].name}</h2>
            <p>${data.results[dataNbr].overview}</p>
          </div>
          <div class="infoWindow--info--vote">
            <p>Release date : <span>${data.results[dataNbr].first_air_date}</span></p>
            <p>Number of votes : <span>${data.results[dataNbr].vote_count}</span></p>
            <p>Rating : <span>${(data.results[dataNbr].vote_average).toFixed(1)}/10</span></p>
          </div>
        </div>
        `
      }

      // Affiche un pop-up avec des info en plus si clique sur series.
      section.addEventListener('click', function (e) {
        if (e.target.closest('.tv-show')) {
          console.log('click');
          infoWindow.innerHTML = ''
          dataNbr = e.target.closest('.tv-show').getAttribute('data-number')
          console.log(dataNbr);
          infoWindow.classList.remove('scale-hidden')
          popUpWindow(dataNbr)
        }

      })
      
      // Supprime le pop-up (lui remet la class qui faisait qu'il etait caché)
      infoWindow.addEventListener('click', function(e){
        if (e.target.classList.contains('delete')) {
          infoWindow.classList.add('scale-hidden')
          // e.target.classList.parentElement.add('scale-hidden')
        }
      })
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })
}

// Get l'attribut data-show sur boutons deja fait en HTML qui completera le lien fetch en fonction du bouton sur lequel on clic et page poar defaut à 1, comme ça si on reclick sur ces bouton, on reviens à la page 1. 
buttonNav.addEventListener('click', function(e){
  showData = e.target.getAttribute('data-show')
  section.innerHTML = ''

  if (showData) {
    console.log(showData);
    pageNbr = 1
    topRated(showData, pageNbr)
  }

})

// (Ajout perso) Navigation a travers toutes les pages disponible + allez sur page precisé 
nextPage.addEventListener('click', function (){
  section.innerHTML = ''
  pageNbr++
  topRated(showData, pageNbr)
})
prevPage.addEventListener('click', function (){
  section.innerHTML = ''
  pageNbr--
  topRated(showData, pageNbr)
})
pageSelect.addEventListener('keypress', function (e){
  if (e.key === 'Enter') {
    section.innerHTML = ""
    pageNbr = pageSelect.value
    pageSelect.value = ""
    topRated(showData, pageNbr)
  }

})








