import Header from "./Header";
import Card from "./Card";
import { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [clickedPokes, setClickedPokes] = useState([]); //verify if i need to useState to render or not
  const [pokeNames, setPokeNames] = useState([
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
  ]);

  const shuffle = (array) => {
    let shuffled = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffled;
  };

  const cardClicked = (nome) => {
    console.log(nome);
    if (!clickedPokes.find((element) => element === nome)){
      setScore(score + 1);
      setClickedPokes((prevClickedPokes) => [...prevClickedPokes, nome]);
    }
    else{
      if (maxScore < score){
        setMaxScore(score);
      }
      setScore(0);
      setClickedPokes([]);
    }
    console.log(clickedPokes);
    let newArray = shuffle(pokeNames);
    setPokeNames(newArray);
  };

  return (
    <>
      <Header score={score} maxScore={maxScore}></Header>
      <div className="border p-10">
        <div className="grid grid-cols-5 gap-10">
          {pokeNames?.map((poke) => (
            <Card key={poke} poke={poke} cardClicked={cardClicked}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
