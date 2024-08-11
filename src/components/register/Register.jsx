import { useState } from "react";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const TextFieldStyle = { backgroundColor: "#ffffff", borderRadius: "4px" };

export default function Register({ auth, db }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repass) {
      setError("Passwords do not match");
      return;
    }

    try {
      const useCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = useCredential.user;

      console.log(email);

      console.log("User registered successfully", user ? user.uid : null);

      await setDoc(doc(db, "users", user.uid), {
        username,
        score: 0,
        description: "Add a description",
        profileImageUrl:
          "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
      });

      console.log("User registered successfully");

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

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
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="username"
          label="Username"
          name="username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={TextFieldStyle}
        />

        <TextField
          required
          id="email"
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={TextFieldStyle}
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
          sx={TextFieldStyle}
        />

        <TextField
          required
          id="repass"
          label="Confirm Password"
          type="password"
          name="repass"
          variant="outlined"
          value={repass}
          onChange={(e) => setRepass(e.target.value)}
          sx={TextFieldStyle}
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
          Register
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
