import { useState, useEffect, useRef } from "react";

import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";

import Button from "@mui/material/Button";
import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import GameOver from "./gameOverPage/GameOver";
import Winner from "./winnerPage/Winner";

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#000",
  borderColor: "#000",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    borderColor: "#000",
  },
};

const correctButtonStyle = {
  backgroundColor: "green",
  color: "#fff",
  borderColor: "green",
};

export default function FlagsGame({ auth, db, currentUser }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameState, setGameState] = useState("playing"); // "playing", "gameOver", or "winner"

  useEffect(() => {
    const fetchQuestionsAndBestScore = async () => {
      const questionsCollection = collection(db, "flagQuestions");
      const questionSnapshot = await getDocs(questionsCollection);
      const questionList = questionSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      const shuffledQuestions = shuffleArray(questionList);
      setQuestions(shuffledQuestions);

      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setBestScore(userDoc.data().bestScore || 0);
        }
      }

      setLoading(false);
    };

    fetchQuestionsAndBestScore();
  }, [db, currentUser]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleButtonClick = async (answer) => {
    setSelectedAnswer(answer);
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);

      if (currentUser && newScore > bestScore) {
        setBestScore(newScore);
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, { bestScore: newScore });
      }
    } else {
      // Game over on first error
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, { lastScore: score });
        if (score > bestScore) {
          await updateDoc(userRef, { bestScore: score });
        }
      }
      setGameState("gameOver");
      return;
    }

    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        // All questions answered correctly
        setGameState("winner");
      }
    }, 1000);
  };

  const resetGame = () => {
    setQuestions(shuffleArray([...questions]));
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setGameState("playing");
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (gameState === "gameOver") {
    return (
      <>
        <GameOver resetGame={resetGame} />
      </>
    );
  }

  if (gameState === "winner") {
    return (
      <>
        <Winner score={score} bestScore={bestScore} />
      </>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>
        Guess the flag
      </Typography>
      <Box sx={{ width: "100%", textAlign: "center", marginTop: 2 }}>
        <img
          src={currentQuestion.flagUrl}
          alt="Flag"
          style={{ maxWidth: "50%", height: "auto", border: "3px solid black" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 3,
          gap: 2,
        }}
      >
        {currentQuestion.options.map((option) => (
          <Box key={option} sx={{ width: "45%", minWidth: "120px" }}>
            <Button
              onClick={() => handleButtonClick(option)}
              variant="outlined"
              sx={
                selectedAnswer === option
                  ? option === currentQuestion.correctAnswer
                    ? correctButtonStyle
                    : { ...buttonStyle, backgroundColor: "red", color: "#fff" }
                  : buttonStyle
              }
              fullWidth
              disabled={selectedAnswer !== null}
            >
              {option}
            </Button>
          </Box>
        ))}
      </Box>
      <Typography variant="h5" component="h2" sx={{ fontSize: "2rem", marginTop: "15px", color: "#333" }}>
        Score: {score}
      </Typography>
      <Typography variant="h6" component="h3" sx={{ fontSize: "1.5rem", marginTop: "10px", color: "#666" }}>
        Best Score: {bestScore}
      </Typography>
    </>
  );
}
