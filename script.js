//Adds list of countries/regions to the DOM
AddCountryToDOM = () => {
  const countryList = document.getElementById("country");
  countryList.innerHTML = "";
  const data = getCountryList();
  data.forEach((element) => {
    var newLi = document.createElement("li");
    var text = document.createTextNode(element);
    countryList.appendChild(newLi);
    newLi.appendChild(text);
  });
};

AddCountryToDOM();

// AddCountToDOM = () => {
//   const countList = document.getElementById("count");
//   countList.innerHTML = "";
//   const data = getCountryList();
//   data.forEach(() => {
//     var newLi = document.createElement("li");
//     var text = document.createTextNode("country: " + );
//     countList.appendChild(newLi);
//     newLi.appendChild(text);
//   });
// };

// AddCountToDOM();
