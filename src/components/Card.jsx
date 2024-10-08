/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function Card({ poke, cardClicked }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + poke)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [poke]);

  const capitalizeFirstLetter = (string) => {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };

  return (
    <>
      <button
        className="flex flex-col bg-white hover:scale-105 shadow-sm border border-slate-200 rounded-lg my-6 bg-blue-100 hover:shadow-lg hover:shadow-blue-500
  w-full h-auto sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-72"
        onClick={() => cardClicked(pokemon.name)}
      >
        <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src={pokemon.sprites?.front_shiny}
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-1 text-xl font-semibold text-slate-800">
            {capitalizeFirstLetter(pokemon.name)}
          </h4>
        </div>
      </button>
    </>
  );
}

export default Card;
