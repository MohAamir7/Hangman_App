function GameResultModal({ isOpenModal, reStartGame, isWinner, word }) {
  if (!isOpenModal) return null;
  console.log("working properly");
  console.log(isOpenModal);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-xl p-8 text-center shadow-2xl w-\[350px]">
        
        <h2 className={`text-2xl font-bold mb-4 ${
          isWinner ? "text-green-500" : "text-red-500"
        }`}>
          {isWinner ? "🎉 You Won!" : "💀 Game Over"}
        </h2>

        {!isWinner && (
          <p className="mb-4">
            The word was: <span className="font-bold">{word}</span>
          </p>
        )}

        <button
          onClick={reStartGame}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Play Again
        </button>
      </div>

    </div>
  );
}

export default GameResultModal;
