import React, { useState, useEffect } from "react";
import CountryBox from "../components/country-box";
export default function index() {
  const [countries, setCountries] = useState([]);
  const [countriesSearch, setCountriesSearch] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const filteredData = [];
      data?.map((elem) => {
        const obj = {
          name: elem?.name,
          tld: elem?.tld,
          cca2: elem?.cca2,
          ccn3: elem?.ccn3,
          cca3: elem?.cca3,
          cioc: elem?.cioc,
          independent: elem?.independent,
          status: elem?.status,
          unMember: elem?.unMember,
          currencies: elem?.currencies,
          idd: elem?.idd,
          capital: elem?.capital,
          altSpellings: elem?.altSpellings,
          region: elem?.region,
          subregion: elem?.subregion,
          languages: elem?.languages,
          translations: elem?.translations,
          latlng: elem?.latlng,
          landlocked: elem?.landlocked,
          borders: elem?.borders,
          area: elem?.area,
          demonyms: elem?.demonyms,
          flag: elem?.flag,
          maps: elem?.maps,
          population: elem?.population,
          gini: elem?.gini,
          fifa: elem?.fifa,
          car: elem?.car,
          timezones: elem?.timezones,
          continents: elem?.continents,
          flags: elem?.flags,
          coatOfArms: elem?.coatOfArms,
          startOfWeek: elem?.startOfWeek,
          capitalInfo: elem?.capitalInfo,
          postalCode: elem?.postalCode,

          visibility: true,
        };
        filteredData?.push(obj);
      });
      // console.log(data);
      setCountries(filteredData);
      setCountriesSearch(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const currentDate = new Date();

 

  const searchCountry = (value) => {
    const countriesData = countriesSearch;
    countriesData?.map((elem) => {
      if (value) {
        if (elem?.name?.common?.toLowerCase().includes(value?.toLowerCase())) {
          elem.visibility = true;
        } else {
          elem.visibility = false;
        }
      } else {
        elem.visibility = true;
      }
    });
    const countriesData2 = countriesData?.filter(
      (elem) => elem?.visibility === true
    );
    setCountries(countriesData2);
  };

  return (
    <>
      <div>
        <div className="countryheading">
          <h2>Countries</h2>
        </div>
        <div>
          <div className="search">
            <input
              type="text"
              placeholder="Search countries"
              onChange={(event) => searchCountry(event.target.value)}
            />
          </div>
        </div>
        {console.log(countries, "countries Vsis")}
        <div className="container">
          {countries?.map((elem) => {
            return <CountryBox country={elem} />;
          })}
        </div>
      </div>
    </>
  );
}
