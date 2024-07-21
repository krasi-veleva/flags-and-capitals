import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function Home() {
  const userLoggedIn = true;

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 15,
        marginTop: 0,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        minWidth: "450px",
      }}
    >
      <Box sx={{ "& .MuiButton-root": { m: 3, width: "300px" } }}>
        <div>
          <Button
            href="/flags-and-capitals"
            variant="contained"
            size="large"
            disabled={!userLoggedIn}
          >
            Play
          </Button>
          <br></br>
          <Button href="/statistic" variant="contained" size="large">
            Statistics
          </Button>
          <br></br>
          {userLoggedIn ? (
            <Button href="/logout" variant="contained" size="large">
              Log out
            </Button>
          ) : (
            <Button href="/login" variant="contained" size="large">
              Log in
            </Button>
          )}
          <br></br>
          {userLoggedIn ? null : (
            <Button href="/register" variant="contained" size="large">
              Register
            </Button>
          )}
          <br></br>
        </div>
      </Box>
    </Paper>
  );
}
