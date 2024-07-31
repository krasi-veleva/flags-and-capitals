import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function Home() {
  const userLoggedIn = true;

  return (
    <>
      <Box sx={{ "& .MuiButton-root": { m: 3, width: "300px" } }}>
        <div>
          <Button
            component={Link}
            to="/flags-and-capitals"
            variant="contained"
            size="large"
            disabled={!userLoggedIn}
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
            Statistics
          </Button>
          <br></br>
          {userLoggedIn ? (
            <Button
              component={Link}
              to="/logout"
              variant="contained"
              size="large"
            >
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
          {userLoggedIn ? null : (
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
