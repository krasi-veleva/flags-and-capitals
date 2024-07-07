import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";

export default function FlagsGame() {
  return (
    <Container maxWidth="sm">
      <h1>Guess the flag</h1>

      <Box>
        <img
          style={{ width: 200, border: "1px solid black" }}
          src="https://wallpapercave.com/wp/wp4205555.jpg"
        />
      </Box>

      <Button variant="contained">Hello world</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="contained">Hello world</Button>

      <p>Score: 0</p>
    </Container>
  );
}
