import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById, deleteProfile } from "../../utils/userUtils";

import LikeButton from "./likeButton/LikeButton";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function ProfileDetails({ auth, db, currentUser }) {
  const { uid } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(uid, db);
      setUser(userData);
    };
    fetchUser();
  }, [uid, db]);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  const handleDelete = async () => {
    try {
      console.log(currentUser);
      await deleteProfile(auth, currentUser.uid, db);
      navigate("/");
    } catch (error) {
      console.error("Error deleting profile: ", error);
    }
  };

  return (
    <>
      <Card sx={{ minWidth: 600, margin: "auto" }}>
        <CardMedia sx={{ height: 500 }} image={user.profileImageUrl} title={user.username} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.description}
          </Typography>
          <Box display="flex" justifyContent="space-around" mb={2}>
            <Box p={2} width="45%" textAlign="center">
              <Typography variant="h6">Best Score</Typography>
              <Typography variant="body1">{user.bestScore}</Typography>
            </Box>
          </Box>
          {currentUser && <LikeButton currentUserId={currentUser.uid} profileId={uid} db={db} />}
        </CardContent>
        {currentUser?.uid === uid && (
          <CardActions>
            <Button size="medium" component={Link} to={`/profile-edit/${uid}`}>
              Edit
            </Button>
            <Button size="small" color="secondary" onClick={handleDelete}>
              Delete
            </Button>
          </CardActions>
        )}
      </Card>
      <Button variant="contained" sx={{ marginTop: "30px" }} onClick={() => navigate("/statistic")}>
        Back
      </Button>
    </>
  );
}
