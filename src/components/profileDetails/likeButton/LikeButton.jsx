import { useState } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function LikeButton() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };
  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <Box width="50%" textAlign="center">
        <Button onClick={handleLike} variant="contained" color={like ? "error" : "primary"}>
          {like ? "Unlike" : "Like"}
        </Button>
      </Box>
    </Box>
  );
}
