import { useState } from "react";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Login({ auth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
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
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
        />

        <TextField
          required
          id="password"
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
        />

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

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
          <Link component={RouterLink} to="/register">
            Register
          </Link>
        </Typography>
      </Box>
    </>
  );
}
