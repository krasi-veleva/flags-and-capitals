import Button from "@mui/material/Button";
import { Box, Paper, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#000",
  borderColor: "#000",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    borderColor: "#000",
  },
};

export default function FlagsGame() {
  const questionsData = {
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
    countries: ["Bulgaria", "Croatia", "England", "Belgium"],
  };

  const [question, setQuestion] = useState({
    flagUrl: "https://flagpedia.net/data/flags/w1160/bg.webp",
    answers: [
      { value: "Bulgaria", correct: true },
      { value: "England" },
      { value: "Croatia" },
      { value: "Serbia" },
    ],
  });

  const [score, setScore] = useState(0);

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
      >
        Guess the flag
      </Typography>
      <Box sx={{ width: "100%", textAlign: "center", marginTop: 2 }}>
        <img
          src={question.flagUrl}
          alt="Flag"
          style={{ maxWidth: "50%", height: "auto" }}
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
        {question.answers.map((button) => (
          <Box
            key={"box" + button.value}
            sx={{ width: "45%", minWidth: "120px" }}
          >
            <Button
              key={button.value}
              // onClick={}
              variant="outlined"
              sx={buttonStyle}
              fullWidth
            >
              {button.value}
            </Button>
          </Box>
        ))}
      </Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontSize: "2rem", marginTop: "15px", color: "#333" }}
      >
        Score: {score}
      </Typography>
    </>
  );
}
