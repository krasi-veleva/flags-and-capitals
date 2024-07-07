import "./App.css";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import FlagsGame from "./components/FlagsGame";

function App() {
  return (
    <Container>
      <Paper
        style={{
          minHeight: "600px",
        }}
        elevation={4}
      >
        <FlagsGame />
      </Paper>
    </Container>
  );
}

export default App;
