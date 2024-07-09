import "./App.css";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import FlagsGame from "./components/FlagsGame";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Container>
      {/* <Paper
        style={{
          minHeight: "600px",
        }}
        elevation={4}
      > */}
      <LogIn />
      {/* <Register /> */}
      {/* <FlagsGame/> */}
      {/* </Paper> */}
    </Container>
  );
}

export default App;
