const miniWrapper = document.querySelector('.mini-wrapper')
let selectBox = document.querySelector('select') 

moreShiba(20)

function moreShiba(select) {
  fetch(`http://shibe.online/api/shibes?count=${select}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      data.forEach(shiba => {
        miniWrapper.innerHTML += `
        <div>
          <img src="${shiba}"  alt="shiba">
        </div>
        ` 
      });
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })
}

selectBox.addEventListener('input', function(){
  miniWrapper.innerHTML = ``
  moreShiba(selectBox.value)
  console.log(selectBox.value);
})











