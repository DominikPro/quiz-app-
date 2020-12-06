import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [gameNubmer, setGameNumber] = useState(0);
  const [questionNumber, setQuestionNumer] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const checkAnswer = (isCorect) => {
    if (isCorect === true) {
      setScore(score + 1);
    }

    const nextquestion = questionNumber + 1;
    if (nextquestion < questions.length) {
      setQuestionNumer(nextquestion);
    } else {
      setShowScore(true);
      setGameNumber(gameNubmer + 1);
    }
  };

  const handlePlayAgain = () => {
    setLastScore(score);
    setQuestionNumer(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div>
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>

          <div className="score-section__last-score">
            {gameNubmer - 1 ? `Last score: ${lastScore}` : `Last score: -`}
          </div>
          <div className="score-section__last-score">
            Game number: {gameNubmer}
          </div>
          <button onClick={handlePlayAgain}>play again</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionNumber + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[questionNumber].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[questionNumber].answerOptions.map((answerOption) => (
              <button
                key={answerOption.answerText}
                onClick={() => checkAnswer(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
