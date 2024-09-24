/* eslint-disable react/prop-types */
import Score from "./Score";
function Header({score, maxScore}){
    return (
       <div className="grid grid-cols-2 p-5 background text-white">
        <div>
            <span><h1>Pokemon Memory Game</h1></span>
            <span><h4>Get points by clicking on an image but do not click on any more than once!</h4></span>
        </div>
        <div>
            <Score score={score} maxScore={maxScore}></Score>
        </div>
       </div> 
    );
}

export default Header;