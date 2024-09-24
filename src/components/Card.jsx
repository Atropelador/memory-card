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

  return (
    <>
      <button className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6" onClick={() => cardClicked(pokemon.name)}>
        <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src={pokemon.sprites?.front_shiny}
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-1 text-xl font-semibold text-slate-800">
            {pokemon.name}
          </h4>
        </div>
      </button>
    </>
  );
}

export default Card;
