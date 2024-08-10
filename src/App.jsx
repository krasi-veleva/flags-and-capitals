import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Paper from "@mui/material/Paper";

import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import FlagsGame from "./components/flagsGame/FlagsGame";
import NotFound from "./components/notFound/NotFound";
import Statistic from "./components/statistic/Statistic";
import ProfileDetails from "./components/profileDetails/ProfileDetails";
import ProfileEdit from "./components/profileEdit/ProfileEdit";

const firebaseConfig = {
  apiKey: "AIzaSyAtvIVOaPBK4XezVsO8ijmawfG-Yky2cbY",
  authDomain: "flags-and-capitals-7a9e9.firebaseapp.com",
  projectId: "flags-and-capitals-7a9e9",
  storageBucket: "flags-and-capitals-7a9e9.appspot.com",
  messagingSenderId: "947792359882",
  appId: "1:947792359882:web:01899ecc70b1bb6a09df33",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
        <Route path="/" element={<Home auth={auth} user={user} />} />

        <Route
          path="/register"
          element={
            user ? <Navigate to="/" replace /> : <Register auth={auth} />
          }
        />

        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login auth={auth} />}
        />

        <Route
          path="/flags-and-capitals"
          element={user ? <FlagsGame /> : <Navigate to="/login" replace />}
        />

        <Route path="/statistic" element={<Statistic />} />

        <Route path="/profile-details/:id" element={<ProfileDetails />} />

        <Route path="/profile-edit/:id" element={<ProfileEdit />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Paper>
  );
}

export default App;
