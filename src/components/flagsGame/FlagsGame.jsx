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
  // const questionsData = {
  //   questions: [
  //     {
  //       flagUrl: "https://flagpedia.net/data/flags/w1160/bg.webp",
  //       validAnswer: "Bulgaria",
  //     },
  //     {
  //       flagUrl: "https://flagpedia.net/data/flags/w1160/gb-eng.webp",
  //       validAnswer: "England",
  //     },
  //     {
  //       flagUrl: "https://flagpedia.net/data/flags/w1160/hr.webp",
  //       validAnswer: "Croatia",
  //     },
  //   ],
  //   countries: ["Bulgaria", "Croatia", "England", "Avganistan2"],
  // };
  // // flagImgUrl
  // // state:
  // // score

  // const [score, setScore] = useState(100);
  // const [data, setData] = useState({
  //   loading: true,
  // });
  // const [question, setQuestion] = useState({});

  // useEffect(() => {
  //   // const getNewQuestion = // TODO:
  //   // setTimeout(() => {
  //   //   setData(questionsData);
  //   //
  //   //   setQuestion({})
  //   // }, 5000);
  // }, []);

  // if (data.loading) {
  //   return <CircularProgress />;
  // } else {
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
          src="https://flagpedia.net/data/flags/w1160/bg.webp"
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
        <Box sx={{ width: "45%", minWidth: "120px" }}>
          <Button variant="outlined" sx={buttonStyle} fullWidth>
            Country 1
          </Button>
        </Box>
        <Box sx={{ width: "45%", minWidth: "120px" }}>
          <Button variant="outlined" sx={buttonStyle} fullWidth>
            Country 2
          </Button>
        </Box>
        <Box sx={{ width: "45%", minWidth: "120px" }}>
          <Button variant="outlined" sx={buttonStyle} fullWidth>
            Country 3
          </Button>
        </Box>
        <Box sx={{ width: "45%", minWidth: "120px" }}>
          <Button variant="outlined" sx={buttonStyle} fullWidth>
            Country 4
          </Button>
        </Box>
      </Box>
    </>

    // {/* // <Box> */}
    //   <img
    //     style={{ width: 200, border: "1px solid black" }}
    //     src={question.flagUrl}
    //   />
    // </Box>

    // {question.answers.map((answer) => (
    //   <Button key={answer} variant="contained">
    //     {answer}
    //   </Button>
    // ))}

    // <p>Score: {score}</p>
  );
  // }
}
