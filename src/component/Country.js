import React from "react";

import style from "./country.module.css";
export const Country = (props) => {
  const { name, flags, capital, populaton, area } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };
  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h3>Name: {name.common}</h3>
        <h3>populaton: {populaton}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};
