// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })

let buttonAll = document.querySelector('.all')
let buttonMen = document.querySelector('.mens')
let buttonWomen = document.querySelector('.womens')

let robotsProfiles = document.querySelector('.robots-profiles')
let robotProfile = document.querySelector('.robot--profile')



// function botTinder() {
  fetch(`robots.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // console.log(data.robots[0].portrait);
      data.robots.forEach( bots => {
        let botGender;

        if (bots.gender == "Female") {
          botGender = "rgb(228, 22, 211)";
        } else{
          botGender = "rgb(104, 216, 253)";
        }

        function botAll(){
          robotsProfiles.innerHTML += `
            <div class="robot--profile" data-gender="${bots.gender}" style="background-color:${botGender};">
  
              <div class="hover_hidden">
                <p class="fullName">${bots.first_name} ${bots.last_name}</p>
                <p class="type">${bots.type}</p>
                <p class="language"> <strong>langue parlée</strong> : ${bots.language}</p>
                <p class="desc"> <strong>description</strong> : ${bots.description}</p>
              </div>
  
              <img src="${bots.portrait}" alt="">
            </div>
          `
        }
        botAll()

        buttonAll.addEventListener('click', function () {
          botAll()
        })

        buttonWomen.addEventListener('click', function(){
          robotsProfiles.innerHTML = ''
          if (bots.gender == "Female"){

          }
        })

      });
      



    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })
  
// }
// botTinder()

















