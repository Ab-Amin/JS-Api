// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })

let buttons = document.querySelector('.trier')
let buttonAll = document.querySelector('.all')
let buttonMen = document.querySelector('.mens')
let buttonWomen = document.querySelector('.womens')

let robotsProfiles = document.querySelector('.robots-profiles')
let robotProfile = document.querySelector('.robot--profile')



function botTinder(genre) {
  fetch(`robots.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // console.log(data.robots[0].portrait);
    data.robots.forEach( bots => {
      let botGender;
      let botSexe = bots.gender;

      if (bots.gender == "Female") {
        botGender = "rgb(228, 22, 211)";
      } else{
        botGender = "rgb(104, 216, 253)";
      }

      // function botAll(){
        if (genre == null || genre == "all" || genre == botSexe) {
          
          robotsProfiles.innerHTML += `
            <div class="robot--profile" data-gender="${bots.gender}"  style="background-color:${botGender};">
  
              <div class="hover_hidden ${bots.gender}">
                <p class="fullName ${botSexe}">${bots.first_name} ${bots.last_name}</p>
                <p class="type">${bots.type} 🏳️</p>
                <p class="language"> <strong>langue parlée</strong> : <br> ${bots.language}</p>
                <p class="desc"> <strong>description</strong> : <br> ${bots.description}</p>
              </div>
  
              <img src="${bots.portrait}" alt="">
            </div>
          `

        }
      // }
      
      
    })
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error)})
}
botTinder()
    

buttons.addEventListener('click', function (e) {
  if (e.target.hasAttribute('data-gender')){
    robotsProfiles.innerHTML= ``

    if(e.target.getAttribute == "all"){
      botTinder()

    } else{
      botTinder(e.target.getAttribute('data-gender'))
      
    }
  }

})

// A rajouté/corriger encore : Button All et count male/female


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Correction +- :

/*

// On passe un argument "genre" à la fonction displayRobots qui sera utile quand on l'appellera plus tard
// Notons que si on n'envoie pas d'argument à une fonction, la valeur de l'argument sera "null" (ça a son importance ici :) )
function displayRobots(genre) {
  fetch(`scripts/robots.json`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    // On boucle sur les robots avec un forEach .. rien de compliqué ici :)
    data.robots.forEach(function(singleRobot) {
      // Je catch dans une variable sexe le sexe du robot en cours
      const sexe = singleRobot.gender
      // Si le genre (l'argument de la fonction) est égal à null (si on a pas passé d'argument à la fonction) OU si le genre est égal à "all" ou à la valeur de sexe (soit Male ou Female) alors on affiche le bloc html pour créer une galerie de robots 
      if (genre == null || genre == "all" || genre == sexe) {
        wrapper.innerHTML += `
        <div class="single-robot">
          <h1 class="${sexe}">${singleRobot.first_name} ${singleRobot.last_name}</h1>
          <img src="${singleRobot.portrait}" alt="${singleRobot.first_name} ${singleRobot.last_name}">
        </div>
        `
      }
    })
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })
}


// On lance la fonction une fois en dehors de tout événement et on la lance .. sans argument du coup .. l'argument "gender" de la fonction vaudra null ici :)
displayRobots()


// Délégation d'événément d'amouuuuuuuuuur ♥ (sur le parent qui contient tous les boutons)
boutons.addEventListener('click', function(event){
  // On check qu'il s'agit bien d'un bouton (en regardant s'il a un data-gender) (on est pas obligé de vérifier ça avec un classList hein ^^) et si c'est bien le cas ...
  if(event.target.hasAttribute('data-gender')){
    // On vide le conteneur d'abord pour le remplacer par soit ...
    wrapper.innerHTML = ''
    // ... tous les robots ("all")
    if(event.target.getAttribute == "all") {
      displayRobots()
    // ... la valeur du data-gender du bouton sur lequel on a cliquay :)
    } else {
      displayRobots(event.target.getAttribute('data-gender'))
    }
  }
})

*/