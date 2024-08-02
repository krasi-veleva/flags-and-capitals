import { Routes, Route } from "react-router-dom";

import Paper from "@mui/material/Paper";

import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import FlagsGame from "./components/flagsGame/FlagsGame";
import NotFound from "./components/notFound/NotFound";
import Statistic from "./components/statistic/Statistic";

function App() {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/flags-and-capitals" element={<FlagsGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Paper>
  );
}

export default App;
