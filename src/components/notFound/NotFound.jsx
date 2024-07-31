import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ color: "#555" }}
      >
        Page Not Found
      </Typography>
    </>
  );
}
