/* eslint-disable react/prop-types */
function Score({score, maxScore}){

    return (
       <div className="grid grid-col-1 justify-end">
        <h3>Score: {score}</h3>
        <h3>Best Score: {maxScore}</h3>
       </div> 
    );
}

export default Score;