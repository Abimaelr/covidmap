//Here are all requests

const covidCountry = async() => {
    const endPoint = 'https://disease.sh/v3/covid-19/countries';
    const countryData = fetch(endPoint).then(data => data.json() );
    return countryData;
}

const countries = async () => {
    const endPoint = "https://restcountries.eu/rest/v2/all";
    const countryInfo = fetch(endPoint).then(data => data.json() );
    return countryInfo;
}
export {covidCountry, countries};