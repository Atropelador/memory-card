/* eslint-disable react/prop-types */
import GeneralModal from "./GeneralModal";
import happypikachu from "../assets/happy-pikachu.gif";

function GameCompleted ({ score, maxScore, showGameCompleted, restart }){
    const textHeader = "Congratulations!!! :D";
    const bodyText = "You are the very best!";
    return (
      <>
        <GeneralModal
          textHeader={textHeader}
          bodyText={bodyText}
          score={score}
          maxScore={maxScore}
          img={happypikachu}
          showModal={showGameCompleted}
          restart={restart}
        ></GeneralModal>
      </>
    );
}

export default GameCompleted;