import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import styles from "./Winner.module.css";

export default function Winner() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom className={styles.title}>
        You Win!
      </Typography>
      <Box className={styles.imageContainer}>
        <img src={"src/assets/winner.jpeg"} alt="cat" className={styles.image} />
      </Box>
      <Box className={styles.buttonContainer}>
        <Button component={Link} to="/" variant="contained" size="medium">
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

// <>
//   <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>
//     You Win!
//   </Typography>
//   <Box sx={{ width: "100%", textAlign: "center", marginTop: 2 }}>
//     <img src={"src/assets/winner.jpeg"} alt="cat" style={{ maxWidth: "40%", height: "auto" }} />
//   </Box>
//   <Box display="flex" flexDirection="column" alignItems="center" gap={2} p={2} sx={{ textAlign: "center" }}>
//     <Button component={Link} to="/" variant="contained" size="medium">
//       Play Again
//     </Button>
//     <Button component={Link} to="/statistic" variant="contained" size="medium">
//       Statistics
//     </Button>
//     <Button component={Link} to="/" variant="contained" size="medium">
//       Home
//     </Button>
//   </Box>
// </>
