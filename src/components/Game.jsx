import Header from "./Header";
import Card from "./Card";
import { useMemo } from "react";

function Game() {

  const pokeNames = useMemo(
    () => [
      "ditto",
      "charmander",
      "charmeleon",
      "aerodactyl",
      "snorlax",
      "vulpix",
      "magnemite",
      "geodude",
      "lapras",
      "mudkip",
      "flygon",
      "ampharos",
    ],
    []
  );

  return (
    <>
      <Header></Header>
      <div className="border p-10">
        container
        <div className="grid grid-cols-5 gap-10">
          {pokeNames.map((poke) => (
            <Card key={poke} poke={poke}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
