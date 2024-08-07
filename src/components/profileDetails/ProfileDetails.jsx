import { useParams } from "react-router-dom";

import LikeButton from "./likeButton/LikeButton";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function ProfileDetails() {
  const { id } = useParams();

  return (
    <>
      <Card sx={{ maxWidth: 600, margin: "auto" }}>
        <CardMedia
          sx={{ height: 500 }}
          image="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            User Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Box display="flex" justifyContent="space-around" mb={2}>
            <Box p={2} width="45%" textAlign="center">
              <Typography variant="h6">Score</Typography>
              <Typography variant="body1">50/90</Typography>
            </Box>
          </Box>
          <LikeButton />
        </CardContent>
        <CardActions>
          <Button size="medium" component={Link} to={`/profile-edit/${id}`}>
            Edit
          </Button>
          <Button size="medium">Delete</Button>
        </CardActions>
      </Card>
    </>
  );
}
