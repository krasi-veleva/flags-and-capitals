import Typography from "@mui/material/Typography";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom className={styles.title}>
        404
      </Typography>
      <Typography variant="h3" component="h2" gutterBottom className={styles.subtitle}>
        Page Not Found
      </Typography>
    </>
  );
}

// <>
//   <Typography
//     variant="h4"
//     component="h1"
//     gutterBottom
//     sx={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
//   >
//     404
//   </Typography>
//   <Typography
//     variant="h4"
//     component="h2"
//     gutterBottom
//     sx={{ color: "#555" }}
//   >
//     Page Not Found
//   </Typography>
// </>
