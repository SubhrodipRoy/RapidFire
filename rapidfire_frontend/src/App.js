import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const TOTAL_QUESTIONS = 10;

  // Countdown logic
  useEffect(() => {
    if (started && countdown !== null) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        loadNewQuestion();
      }
    }
  }, [countdown, started]);

  // Timer for each question
  useEffect(() => {
    if (showQuestion && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (showQuestion && timeLeft === 0) {
      handleSubmit();
    }
  }, [showQuestion, timeLeft]);

  const handleStart = () => {
    setStarted(true);
    setCountdown(3);
  };

  const loadNewQuestion = () => {
    fetch('http://localhost:3000/generate-random-question')
      .then(res => res.json())
      .then(data => {
        setQuestionData(data);
        setTimeLeft(30);
        setShowQuestion(true);
        setUserAnswer('');
        setFeedback('');
      })
      .catch(err => console.error(err));
  };

  const handleSubmit = () => {
    setShowQuestion(false);
    let correct = false;

    if (questionData) {
      const expected = Number(questionData.answer);
      const given = Number(userAnswer);
      correct = Math.abs(expected - given) < 0.0001;
    }

    if (correct) {
      setScore(prev => prev + 1);
      setFeedback('✅ Correct!');
    } else {
      setFeedback(`❌ Wrong! Correct answer was ${questionData?.answer}`);
    }

    setQuestionCount(prev => prev + 1);

    if (questionCount + 1 < TOTAL_QUESTIONS) {
      setTimeout(() => {
        loadNewQuestion();
      }, 2000);
    }
  };

  return (
    <div className="App">
      {!started && (
        <div className="home-screen">
          <h1>🔥 RapidFire Quiz 🔥</h1>
          <button className="start-button" onClick={handleStart}>
            START
          </button>
        </div>
      )}

      {started && countdown !== null && countdown > 0 && (
        <div className="countdown-screen">
          <h2>{countdown}</h2>
        </div>
      )}

      {started && countdown === 0 && showQuestion && questionData && (
        <div className="quiz-screen">
          <h2>{questionData.question}</h2>
          <p>Time left: {timeLeft}s</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {feedback && (
        <div className="feedback">
          <h3>{feedback}</h3>
        </div>
      )}

      {started && questionCount >= TOTAL_QUESTIONS && (
        <div className="result-screen">
          <h2>Game Over!</h2>
          <p>Your score: {score} / {TOTAL_QUESTIONS}</p>
        </div>
      )}
    </div>
  );
}

export default App;
