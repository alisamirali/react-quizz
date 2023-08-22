function FinishScreen({ dispatch, points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} points!{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High Score: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
