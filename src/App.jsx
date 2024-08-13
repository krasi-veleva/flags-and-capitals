import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

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
const db = getFirestore(app);

// const questions = [
//   {
//     flagUrl: "https://flagpedia.net/data/flags/w1160/bg.webp",
//     correctAnswer: "Bulgaria",
//     options: ["Bulgaria", "Romania", "Hungary", "Serbia"],
//   },
//   {
//     flagUrl: "https://flagpedia.net/data/flags/w1160/gb-eng.webp",
//     correctAnswer: "England",
//     options: ["England", "Denmark", "Norway", "Sweden"],
//   },
//   {
//     flagUrl: "https://flagpedia.net/data/flags/w1160/hr.webp",
//     correctAnswer: "Croatia",
//     options: ["Croatia", "Slovakia", "Slovenia", "Czech Republic"],
//   },
//   // Add more questions here
// ];

// async function addQuestions() {
//   const questionsCollection = collection(db, "flagQuestions");

//   for (const question of questions) {
//     try {
//       await addDoc(questionsCollection, question);
//       console.log("Question added successfully");
//     } catch (error) {
//       console.error("Error adding question: ", error);
//     }
//   }
// }

// addQuestions();

function App() {
  const [user, setUser] = useState(null);
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

        <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register auth={auth} db={db} />} />

        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login auth={auth} />} />

        <Route
          path="/flags-and-capitals"
          element={user ? <FlagsGame db={db} currentUser={user} /> : <Navigate to="/login" replace />}
        />

        <Route path="/statistic" element={<Statistic db={db} currentUser={user} />} />

        <Route path="/profile-details/:uid" element={<ProfileDetails db={db} auth={auth} currentUser={user} />} />

        <Route path="/profile-edit/:uid" element={<ProfileEdit db={db} currentUser={user} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Paper>
  );
}

export default App;
