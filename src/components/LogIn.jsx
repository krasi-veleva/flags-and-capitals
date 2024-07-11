import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

export default function LogIn() {
  return (
    <Container component="main" maxWidth="lg">
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
        <Typography variant="h4" component="h1" gutterBottom>
          Log in Page
        </Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { margin: 3, width: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
          noValidate
          autoComplete="on"
        >
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
          />

          <TextField
            required
            id="password"
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
          />

          <Button
            type="submit"
            display="flex"
            variant="contained"
            color="primary"
            sx={{
              marginTop: 3,
              marginBottom: 2,
              padding: "12px 24px",
              fontSize: "18px",
              backgroundColor: "#1565c0",
            }}
          >
            Log in
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: 3,
            padding: 2,
            backgroundColor: "#e0e0e0",
            borderRadius: "7px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            If you do not have an account <br></br>
            <Link href="/register">Register</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
