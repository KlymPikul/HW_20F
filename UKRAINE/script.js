const filmTitle = document.getElementById("title");
const flagImg = document.getElementById("flag");
const foundation = document.getElementById("foundation");
const nationalLanguage = document.getElementById("language");
const countryCapital = document.getElementById("capital");
const countryAnthem = document.getElementById("anthem");
const countrySeal = document.getElementById("seal");
const countryLocation = document.getElementById("location");
const countryPopulation = document.getElementById("population");
const nationalCurrency = document.getElementById("currency");
const countryTimeZone = document.getElementById("timeZone");

const getData = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const { name, flag, found, languages, capital, anthem, seal, location, population, currency, timeZone } = data;

    filmTitle.textContent = name;
    flagImg.src = flag;
    foundation.textContent = `Foundation: ${found}`;
    nationalLanguage.textContent = `Languages: ${languages.join(", ")}`;
    countryCapital.textContent = `Capital: ${capital}`;
    countryAnthem.innerHTML = `<a href="${anthem}" target="_blank">Anthem</a>`;
    countrySeal.src = seal;
    countryLocation.innerHTML = `<a href="${location}" target="_blank">Location</a>`;
    countryPopulation.textContent = `Population: ${population}`;
    nationalCurrency.textContent = `Currency: ${currency.name} (${currency.code})`;
    countryTimeZone.textContent = `Time Zone: ${timeZone}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();





