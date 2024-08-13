import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { getAllLikesForProfile, hasLikedProfile, likeProfile, removeLike } from "../../../utils/likeUtils";

export default function LikeButton({ currentUserId, profileId, db }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Fetching like count and status");

    const fetchLikeData = async () => {
      const liked = await hasLikedProfile(currentUserId, profileId, db);
      setLike(liked);

      const likes = await getAllLikesForProfile(profileId, db);
      console.log(likes);
      setCount(likes.length);
    };

    fetchLikeData();
  }, [currentUserId, profileId, db]);

  const handleLike = async () => {
    if (like) {
      await removeLike(currentUserId, profileId, db);
      setLike(false);
      setCount((previousCount) => previousCount - 1);
    } else {
      await likeProfile(currentUserId, profileId, db);
      setLike(true);
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <Box width="50%" textAlign="center">
        <Button onClick={handleLike} variant="contained" color={like ? "error" : "primary"}>
          {like ? "Unlike" : "Like"} {count}
        </Button>
      </Box>
    </Box>
  );
}
