import axios from 'axios';

<<
<< << < HEAD
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

        return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
        return error;
    }
};

export const fetchCountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}; ===
=== =
const url = "'https://covid19.mathdro.id/api';

export const fetchData = async() => {
        try {
            const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

            const modifiedData = { confirmed, recovered, deaths, lastUpdate, }

            return { confirmed, recovered, deaths, lastUpdate, };
        } catch (error) {

        }
    } >>>
    >>> > 8 b342849c138724dfbd8fad8208eae07481bad92