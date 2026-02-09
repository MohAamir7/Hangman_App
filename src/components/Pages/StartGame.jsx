import { Link } from "react-router-dom";
import TextInputFormContainer from "../TextInputform/TextInputformConatiner";

function startGame() {
    return(
        <div>
            <h1>Start</h1>
            <TextInputFormContainer/>
            <Link to='/play' className="text-blue-400">Play Game</Link>
        </div>
    )
    
}

export default startGame;