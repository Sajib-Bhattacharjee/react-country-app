// import React from "react";

// import UseEffect from "./COMPONENTS/UseEffect/UseEffect";
// import DataFetch from "./COMPONENTS/UseEffect/DataFetch";

// const App = () => {
//   return (
//     <div>
//       {/* <Home /> */}

//       {/* <FAQS /> */}

//       <DataFetch />
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";

import "./App.css";
import Countries from "./component/Countries";
import Search from "./component/Search";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
      //console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const loadingMessage = <h3>Data is Loading...</h3>;

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();

      return countryName.startsWith(value);
    });

    setFilteredCountries(newCountries);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && loadingMessage}
      {error && <h3>{error.message}</h3>}
      {countries && (
        <Countries
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );
};

export default App;
