const filmTitle = document.getElementById("title");
const flagImg = document.getElementById("flag");
const foundation = document.getElementById("foundation");
const nationalLanguage = document.getElementById("language");
const countryCapital = document.getElementById("capital");
const countryAnthem = document.getElementById("anthem");
const countrySeal = document.getElementById("seal");
const countryPopulation = document.getElementById("population");
const nationalCurrency = document.getElementById("currency");
const countryTimeZone = document.getElementById("timeZone");

const getData = async () => {
  try {
    const response = await fetch("https://klympikul.github.io/HW_20F/API/data.json");
    const data = await response.json();
    const { name, flag, found, languages, capital, anthem, seal, population, currency, timeZone } = data;

    filmTitle.textContent = name;
    flagImg.src = flag;
    foundation.textContent = `Foundation: ${found}`;
    nationalLanguage.textContent = `Languages: ${languages.join(", ")}`;
    countryCapital.textContent = `Capital: ${capital}`;
    countryAnthem.innerHTML = `<a href="${anthem}" target="_blank">Anthem</a>`;
    countrySeal.src = seal;
    countryPopulation.textContent = `Population: ${population}`;
    nationalCurrency.textContent = `Currency: ${currency.name} (${currency.code})`;
    countryTimeZone.textContent = `Time Zone: ${timeZone}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();





