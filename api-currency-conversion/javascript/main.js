// fetch(`https://api.example.com/data`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })


// =-=-=-=-=-=-=-=-=-=-=-= Apiplayer.com servers Down, du coup pas pu finir =-=-=-=-=-=-=-=-=-=-=-=-=-=
// reprendre a ligne 29, et afficher les symbols + les mettres dans select>option

var myHeaders = new Headers();
myHeaders.append("apikey", "QHoXNYbAXjNnJAzDovlMNrzMUUbNkSUL");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


let txt = document.querySelector('.txt')
let toConvert = document.querySelector('.toConvert')
let toConvertTo = document.querySelector('.toConvertTo')
let btn = document.querySelector('.btn')
let nbr = document.querySelector('.nbr')

// Prendre nom des currency à mettre dans <option></option> et diminutif à mettre dans value d'option 

// function currencySymmbols() {
//   fetch(`https://api.apilayer.com/fixer/symbols`, requestOptions)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(data.symbols);

//     // console.log(Object.getOwnPropertyNames(data.symbols));

//     toConvert.innerHTML += `${data.symbols}`
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
//   })
// }

// currencySymmbols()

function currencyConversion(currency1, currency2, amount) {
  fetch(`https://api.apilayer.com/fixer/convert?to=${currency2}&from=${currency1}&amount=${amount}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.result);
      
      if (isNaN(txt.value) === false) {
        console.log(`${txt.value}${toConvert.value} to ${toConvertTo.value} = ${data.result} ${toConvertTo.value}`);
        document.querySelector('.nbr').innerHTML = `${(data.result).toFixed(2)} ${currency2}`

      } else if (txt.value = ''){
        nbr.innerHTML = `Error 404`

      }
      
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);

  })
}


btn.addEventListener('click', function(){
  console.log(`${txt.value} ${toConvert.value} ==> ${toConvertTo.value}`);
  currencyConversion(toConvert.value, toConvertTo.value, txt.value)
})
















