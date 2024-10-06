/* eslint-disable react/prop-types */

import GeneralModal from "./GeneralModal";
import sadpikachu from "../assets/sad-pikachu.gif";

function GameOver({ score, maxScore, showGameOver, restart }) {
  const textHeader = "Game Over :(";
  const bodyText = "Better luck next time!";
  return (
    <>
      <GeneralModal
        textHeader={textHeader}
        bodyText={bodyText}
        score={score}
        maxScore={maxScore}
        img={sadpikachu}
        showModal={showGameOver}
        restart={restart}
      ></GeneralModal>
    </>
  );
}

export default GameOver;
