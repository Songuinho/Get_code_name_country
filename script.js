function search() {
  let selectElement = document.querySelector("#countrySelect");
  selectElement.innerHTML = ""; // Efface les options existantes
  var myHeaders = new Headers();
  myHeaders.append("apikey", "zP4IlY3DG5d1IYFQ89LoEn8dGoG97iaH");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  let url = "https://api.apilayer.com/number_verification/countries";

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
      for (let countryCode in result) {
        if (result.hasOwnProperty(countryCode)) {
          const countryData = result[countryCode].country_name;

          // Créez un nouvel élément option pour chaque pays
          const optionElement = document.createElement("option");
          optionElement.value = countryCode;
          optionElement.textContent = `${countryData} (${result[countryCode].dialling_code})`;

          // Ajoutez l'option à la liste déroulante
          selectElement.appendChild(optionElement);
        }
      }
    })
    .catch(error => console.log('error', error));

}


// function search() {
//   // let pays = document.querySelector(".text");
//   let infos = document.querySelector("section");

//   var myHeaders = new Headers();
//   myHeaders.append("apikey", "zP4IlY3DG5d1IYFQ89LoEn8dGoG97iaH");

//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//   };

//   let url = "https://api.apilayer.com/number_verification/countries";

//   fetch(url, requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       // console.log(result);
//       for (let items in result) {
//         if (result.hasOwnProperty(items)) {
//           const countryData = result[items].country_name
//           const codeData = result[items].dialling_code

//           const nameDiv = document.createElement("div");

//           nameDiv.innerHTML = `<p>${items} : (${codeData}) ${countryData} </p>`;
//           infos.appendChild(nameDiv);
//         }
//       }
//     })
//     .catch(error => console.log('error', error));
// }