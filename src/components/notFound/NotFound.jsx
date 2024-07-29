import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 25,
        marginTop: 0,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        minWidth: "450px",
      }}
    >
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
    </Paper>
  );
}
