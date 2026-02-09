import { Link } from "react-router-dom";
import TextInputFormContainer from "../TextInputform/TextInputformConatiner";

function startGame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 flex-col">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md text-center border border-white/20">
        <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
          HangMan Game
        </h2>
        <p className="text-gray-300 mb-8 text-sm">
          Enter a secret word and challenge yourself!
        </p>
      </div>
      <div className="mb-6">
        <TextInputFormContainer />
      </div>
      
      <Link to="/play" className="inline-block text-center w-2xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-90 transition-transform duration-300 hover:shadow-purple-500/50">
        Play Game 🚀
      </Link>
    </div>
  );
}

export default startGame;
