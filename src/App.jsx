import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import FlagsGame from "./components/flagsGame/FlagsGame";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/flags-and-capitals" element={<FlagsGame />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
