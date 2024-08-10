import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Home({ auth, user }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <Box sx={{ "& .MuiButton-root": { m: 3, width: "300px" } }}>
        <div>
          <Button
            component={Link}
            to="/flags-and-capitals"
            variant="contained"
            size="large"
            disabled={!user}
          >
            Play
          </Button>
          <br></br>
          <Button
            component={Link}
            to="/statistic"
            variant="contained"
            size="large"
          >
            Statistic
          </Button>
          <br></br>
          {user ? (
            <Button variant="contained" size="large" onClick={handleLogout}>
              Log out
            </Button>
          ) : (
            <Button
              component={Link}
              to="/login"
              variant="contained"
              size="large"
            >
              Log in
            </Button>
          )}
          <br></br>
          {!user && (
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
            >
              Register
            </Button>
          )}
          <br></br>
        </div>
      </Box>
    </>
  );
}
