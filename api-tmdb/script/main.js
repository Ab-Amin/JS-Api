/*
faire un swipper avec les données de tmdb - ici pour l'api  
afficher 20 films/series, pas plus - d'ailleurs c'est l'affichage par défaut par pag de l'api. donc pas de foreach 
il faut un input et un bouton pour faire une recherche de film ou serie
il faut créer une connexion à l'api de tmdb pour récupérer les données 
Olivier a mis sa clef sur le Discord

MON CONSEIL : d'abord faire des recherches toi-même pour lier l'API, puis lire la ligne suivante 

SI tu galère à lier ton API, voici le lien vers ce qu'il te faut en plus
https://developer.themoviedb.org/reference/intro/getting-started  (de base on est dans l'onglet "guides" qui donne des infos importantes, puis faut aller dans l'onglet API pour les bonnes données de connexions. On s'est presque tous fait avoir...)

IMPORTANT : 
J'ai nettoyé mon code pour que tu n'aies que ce qui fonctionne bien. Je parviens pas à faire les bonus pour le moment, mais hésites pas à essayer, tu arriveras certainement à un résultat
ATTENTION - dans l'API, choisir l'option "film" et pas l'option "multi", l'api ne fonctionne pas pareil alors et ça on Olivier n'a pas encore analysé comme fonctionnement (et c'est chiant, j'avais tenté la vversion milti par hasard et galèèèèèèère
ATTENTION - met bien le filtre adulte sur false - sinon tu vas avoir de ces surprises....
pour infos:
- on a fait la plupart des recherches avec cheval et love (fais gaffe aux recherches avec cheval sans activer le filtre adulte...
- le mot poulet donne 35 résultats et risotto 2. Je suis tombée dessus par hasard, mais ce sont 2 infos intérressantes pour des tests
- dans les 20 premiers resultats de love et de poulet, i y a des films sans posters - utile pour le premier bonus qui est facile à faire (même pour moi toute seule ^^)

BONUS - s'il n'y a pas d'image poster, alors en mettre une par défaut
BONUS - s'il y a plus d'une page de résultat, faire apparaitre un bouton pour charger plus de résultats dans un deuxieme swipper
*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

let research = document.querySelector('input')
let submit = document.querySelector('button')
let gallery = document.querySelector('.swiper-wrapper')
let nextPage = document.querySelector('.next--page')
let prevPage = document.querySelector('.previous--page')

let pageNbr = 1;

// Rajouté pageNbr pour switch entre les pages dispo s'il y en a + qu'une
function findAMovie(movie, pageNbr){
   /* on va mettre un argument "movie" pour pouvoir réutiliser la fonction si besoin, et c'est tout en bas dans l'appel de la fonction au clic que cet argument "deviendra" research.value */

  fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=fr-fr&page=${pageNbr}&api_key=6631e5f1dc96088e0d26b86da29b5b6a&query=${movie}`)
  
  .then(response => response.json())
  .then(data => {
    console.log(data);

    console.log(`current page : ${data.page}`);
    console.log(`total pages : ${data.total_pages}`);
    console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);

    // Si total des page >= 2 --> affiche boutton nextPage dans page 1
    // Sinon les bouttons restent cachés
    if (data.total_pages >= 2){
      nextPage.classList.remove('hidden')
    } else {
      nextPage.classList.add('hidden')
      prevPage.classList.add('hidden')
    }

    // Si current page == 1 --> cacher boutton prevPage (pour pas allez dans les négatif et tout faire buggé)
    // Et Si current page >= 2 --> affiche les 2 bouttons
    if (data.page == 1){
      prevPage.classList.add('hidden')
    } else if (data.page >= 2) {
      nextPage.classList.remove('hidden')
      prevPage.classList.remove('hidden')
    }
    
    // Si on est arrivé à la page max --> cache le boutton nextPage 
    if (data.page == data.total_pages) {
      nextPage.classList.add('hidden')
    }


    for(let i=0; i< data.results.length; i++){

      if(data.results[i].poster_path /*!=null*/ ){
        gallery.innerHTML += 
        `
          <div  class="swiper-slide carte">
            <h3>${i} | ${data.results[i].title}</h3>
            <h4>${data.results[i].original_title}</h4>
            <div class="imgDesc">
              <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
              <div class="desc"><p>>${data.results[i].overview}</p></div>
            </div>
          </div>
        `
      } else {
        gallery.innerHTML += 
        `
          <div  class="swiper-slide carte">
            <h3>${data.results[i].title}</h3>
            <h4>${data.results[i].original_title}</h4>
            <img src="../img/No-Image-Placeholder.svg" alt="">
          </div>
        `
      }
    }
  })
}


submit.addEventListener("click", function(){
  gallery.innerHTML = ""
  if (research.value != "") {
    findAMovie(research.value, 1)
  }

}) 
research.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    gallery.innerHTML = ""
    findAMovie(research.value, 1)
  }
})

nextPage.addEventListener('click', function (){
  gallery.innerHTML = ""
  pageNbr++
  findAMovie(research.value, pageNbr)
})
prevPage.addEventListener('click', function (){
  gallery.innerHTML = ""
  pageNbr--
  findAMovie(research.value, pageNbr)
})








