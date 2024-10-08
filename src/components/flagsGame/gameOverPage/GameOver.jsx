import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function GameOver({ resetGame }) {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>
        Game Over!
      </Typography>
      <Box sx={{ width: "100%", textAlign: "center", marginTop: 2 }}>
        <img src={"src/assets/gameover.jpeg"} alt="cat" style={{ maxWidth: "40%", height: "auto" }} />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} p={2} sx={{ textAlign: "center" }}>
        <Button onClick={resetGame} variant="contained" size="medium">
          Play Again
        </Button>
        <Button component={Link} to="/statistic" variant="contained" size="medium">
          Statistics
        </Button>
        <Button component={Link} to="/" variant="contained" size="medium">
          Home
        </Button>
      </Box>
    </>
  );
}
