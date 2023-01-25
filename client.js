//Gets list of countries/regions filters data, only unique
getCountryList = () => {
  let rawData = randomPersonData.map((person) => person.region);
  let data = [...new Set(rawData)];
  data.sort();
  return data;
};

getCountryList();

const countData = [{}];
//Gets list of countries and amount of people in list from the country
//Only appends last of the list to the array
getCountryCount = () => {
  let rawData = randomPersonData.map((person) => person.region);
  const country = getCountryList();
  for (let i = 0; i < country.length; i++) {
    country.forEach((element) => {
      let count = rawData.filter((x) => x === element).length;
      let nation = element;
      Object.assign(countData, { country: nation, people: count });
    });
  }
};
getCountryCount();
