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
      <Box sx={{ "& button": { m: 3, width: "300px" } }}>
        <div>
          <Button variant="contained" size="large" disabled>
            Play
          </Button>
          <br></br>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#1976d2",
              color: "#ffffff",
              "&:hover": { backgroundColor: "#115293" },
            }}
          >
            Statistics
          </Button>
          <br></br>
          {userLoggedIn ? (
            <Button variant="contained" size="large">
              Log out
            </Button>
          ) : (
            <Button variant="contained" size="large">
              Log in
            </Button>
          )}
          <br></br>
          {userLoggedIn ? null : (
            <Button variant="contained" size="large">
              Register
            </Button>
          )}
          <br></br>
        </div>
      </Box>
    </Paper>
  );
}
