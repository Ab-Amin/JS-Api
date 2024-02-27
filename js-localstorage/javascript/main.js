// 1. Quand pour la première fois, l'utilisateur arrive, il est confronté à un formulaire dans lequel il va indiquer son surnom et une URL en absolu et un bouton envoyer sera présent

// 2. Quand il va appuyer sur envoyer, le panneau du formulaire s'en va et laisse sa place à une sorte de panneau qui indique qu'il est loggé avec la référence à son surnom qui est indiquée ainsi que l'URL en absolu qui est utilisée pour afficher son avatar

// 3. Si l'utilisateur clique sur une petite icône dans le panneau où son nom et son avatar sont présents, il a la possibilité d'aller éditer son surnom ainsi que l'URL de son avatar. Dans ce cas là, le panneau avec le formulaire inital redevient visible et l'autre disparait

// 4. Si l'utilsateur a déjà rentré son surnom et son avatar, et qu'il revient sur cette page ultérieurement, alors, on affiche par défaut le panneau avec son avatar et son surnom plutôt que d'afficher le formulaire pour rentrer ces 2 informations

// localStorage.setItem(key : strring, value : string) |add item name and value
// localStorage.getItem(key) | get item '-'
// localStorage.clear | tout remove
// localStorage.removeItem(key) | remove specific item

// =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=--=

let profile = document.querySelector('.profile')
    loginWindow = document.querySelector('.first-login')
    inputName = document.querySelector('#myName')
    inputFile= document.querySelector('#myUrlFile')
    submit = document.querySelector('.submit')
    myImg = document.querySelector('.your-image')
    myName = document.querySelector('.myName')
    settings = document.querySelector('.settings')

console.log(localStorage);


if (localStorage.length == 0) {
  profile.classList.add('hidden')

  submit.addEventListener('click', function(){
    console.log(inputFile.value);

    if (inputName.value != "" && inputFile.value != ""){
      localStorage.setItem(`Name`, `${inputName.value}`)
      localStorage.setItem(`Url`, `${inputFile.value}`)
  
      inputFile.value = ""
      inputName.value = ""
      
      profile.classList.remove('hidden')
      loginWindow.classList.add('hidden')
      
      localName = localStorage.getItem('Name')
      localImg = localStorage.getItem('Url')

      console.log(localImg);
      
      document.querySelector('.your-image').innerHtml = `<img src="${localImg}" alt="">`
      myName = document.querySelector('.myName').innerHtml = `${localName}`

    } else{
      console.log(`nope`);
    }

  })
  

} else {

  profile.classList.remove('hidden')
  loginWindow.classList.add('hidden')
  
  localName = localStorage.getItem('Name')
  localImg = localStorage.getItem('Url')

  console.log(localName + " : " + localImg);
  
  document.querySelector('.your-image').innerHTML = `<img src="${localImg}" alt="">`
  document.querySelector('.myName').innerText = `${localName}`
}


settings.addEventListener('click',  function(){
  profile.classList.add('hidden')
  loginWindow.classList.remove('hidden')


  submit.addEventListener('click', function(){
    console.log(inputFile.value);

    if (inputName.value != "" && inputFile.value != ""){
      localStorage.removeItem(`Name`)
      localStorage.removeItem(`Url`)

      localStorage.setItem(`Name`, `${inputName.value}`)
      localStorage.setItem(`Url`, `${inputFile.value}`)
  
      inputFile.value = ""
      inputName.value = ""
      
      profile.classList.remove('hidden')
      loginWindow.classList.add('hidden')
      
      localName = localStorage.getItem('Name')
      localImg = localStorage.getItem('Url')

      console.log(localImg);
      
      document.querySelector('.your-image').innerHTML = `<img src="${localImg}" alt="">`
      myName = document.querySelector('.myName').innerText = `${localName}`

    } else{
      console.log(`nope`);
    }

  })
})

let rotate = document.querySelector('.rotate')

rotate.addEventListener('click', function(){
  profile.classList.toggle('rotate-all')
  profile.classList.toggle('hidden')

  loginWindow.classList.toggle('rotate-all')
  loginWindow.classList.toggle('hidden')


  

})




