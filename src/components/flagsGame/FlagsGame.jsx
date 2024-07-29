import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";

export default function FlagsGame() {
  const data = {
    questions: [
      {
        flagUrl: "https://flagpedia.net/data/flags/w1160/bg.webp",
        validAnswer: "Bulgaria",
      },
      {
        flagUrl: "https://flagpedia.net/data/flags/w1160/gb-eng.webp",
        validAnswer: "England",
      },
      {
        flagUrl: "https://flagpedia.net/data/flags/w1160/hr.webp",
        validAnswer: "Croatia",
      },
    ],
    countries: ["Bulgaria", "Croatia", "England", "Avganistan2"],
  };
  // flagImgUrl

  // state:
  // score

  const [score, setScore] = useState(100);
  const [question, setQuestion] = useState({ loading: true });

  useEffect(() => {
    // const getNewQuestion = // TODO:
    // const newQuestion = setQuestion(getNewQuestion);
  }, []);

  if (question.loading) {
    return <> loading </>;
  } else {
    return (
      <Container maxWidth="sm">
        <h1>Guess the flag</h1>

        <Box>
          <img
            style={{ width: 200, border: "1px solid black" }}
            src={question.flagUrl}
          />
        </Box>

        {question.answers.map((answer) => (
          <Button key={answer} variant="contained">
            {answer}
          </Button>
        ))}

        <p>Score: {score}</p>
      </Container>
    );
  }
}
