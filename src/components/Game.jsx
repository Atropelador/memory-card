import Header from "./Header";
import Card from "./Card";
function Game(){
    return (
       <>
            <Header></Header>
            <div className="border p-10">
                container
                <div>
                    <Card></Card>
                </div>
            </div>
       </> 
    );
}

export default Game;