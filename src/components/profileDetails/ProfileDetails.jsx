import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById } from "../../utils/userUtils";

import LikeButton from "./likeButton/LikeButton";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function ProfileDetails({ db }) {
  const { uid } = useParams();
  const [user, setUser] = useState(null);

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
              <Typography variant="h6">Score</Typography>
              <Typography variant="body1">{user.score}</Typography>
            </Box>
          </Box>
          <LikeButton />
        </CardContent>
        <CardActions>
          <Button size="medium" component={Link} to={`/profile-edit/${uid}`}>
            Edit
          </Button>
          <Button size="medium">Delete</Button>
        </CardActions>
      </Card>
    </>
  );
}
