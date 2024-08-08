import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const TextFieldStyle = {};

export default function Register() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Register Page
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
        autoComplete="on"
      >
        <TextField
          required
          id="username"
          label="Username"
          name="username"
          variant="outlined"
          sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
        />

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

        <TextField
          required
          id="repass"
          label="Repeat Password"
          type="password"
          name="repass"
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
          Submit
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
          If you already have an account <br></br>
          <Link component={RouterLink} to="/login">
            Login
          </Link>
        </Typography>
      </Box>
    </>
  );
}
