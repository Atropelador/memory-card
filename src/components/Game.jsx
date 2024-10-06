import Header from "./Header";
import Card from "./Card";
import GameOver from "./GameOver";
import GameCompleted from "./GameCompleted";
import { useState } from "react";

function Game() {
  const MAX_POSSIBLE_SCORE = 3;
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showGameCompleted, setShowGameCompleted] = useState(false);
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
    if (!clickedPokes.find((element) => element === nome)) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        setClickedPokes((prevClickedPokes) => [...prevClickedPokes, nome]);
        if (newScore === MAX_POSSIBLE_SCORE) {
          setMaxScore(newScore);
          setShowGameCompleted(true);
        }

        return newScore;
      });
    } else {
      if (maxScore < score) {
        setMaxScore(score);
      }
      setShowGameOver(true);
    }
    console.log(clickedPokes);
    let newArray = shuffle(pokeNames);
    setPokeNames(newArray);
  };

  const restart = () => {
    //mostrar no click restart
    setShowGameCompleted(false);
    setShowGameOver(false);
    setScore(0);
    setClickedPokes([]);
  };

  return (
    <div className="font-mono">
      <Header score={score} maxScore={maxScore}></Header>
      <div className=" p-10 background">
        <div className="grid grid-cols-5 gap-10">
          {pokeNames?.map((poke) => (
            <Card key={poke} poke={poke} cardClicked={cardClicked}></Card>
          ))}
          <GameOver
            showGameOver={showGameOver}
            score={score}
            maxScore={maxScore}
            restart={restart}
          ></GameOver>
          <GameCompleted
            showGameCompleted={showGameCompleted}
            score={score}
            maxScore={maxScore}
            restart={restart}
          ></GameCompleted>
        </div>
      </div>
    </div>
  );
}

export default Game;
