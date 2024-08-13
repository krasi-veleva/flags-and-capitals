import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ProfileEdit({ db, currentUser }) {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    profileImageUrl: "",
    description: "",
  });

  useEffect(() => {
    if (currentUser && currentUser.uid !== uid) {
      console.log("Unauthorized access attempt");
      navigate("/"); // Redirect to home page or show an error message
      return;
    }

    const fetchUserData = async () => {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setProfileData(userDoc.data());
      }
    };
    fetchUserData();
  }, [db, uid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", uid);

    try {
      await updateDoc(userRef, {
        profileImageUrl: profileData.profileImageUrl,
        description: profileData.description,
      });
      navigate(`/profile-details/${uid}`);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Typography p={4} variant="h4" component="h1" gutterBottom>
        Profile Edit Page
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { margin: 2, width: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={profileData.profileImageUrl}
          alt="Profile"
          sx={{ width: 100, height: 100, borderRadius: "50%", marginBottom: 2 }}
        />
        <TextField
          required
          id="profileImageUrl"
          name="profileImageUrl"
          label="Profile Image URL"
          variant="outlined"
          value={profileData.profileImageUrl}
          onChange={handleInputChange}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          multiline
          rows={4}
          value={profileData.description}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            marginTop: "30px",
          }}
        >
          Save
        </Button>
      </Box>
      <Button variant="contained" sx={{ marginTop: "20px" }} onClick={() => navigate(`/profile-details/${uid}`)}>
        Back
      </Button>
    </>
  );
}
