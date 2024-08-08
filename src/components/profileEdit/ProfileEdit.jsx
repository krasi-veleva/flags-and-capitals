import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import { Image } from "@mui/icons-material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function ProfileEdit() {
  const profileData = {
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
  };
  return (
    <>
      <Typography p={4} variant="h4" component="h1" gutterBottom>
        Profile Edit Page
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { margin: 6, width: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={profileData.imageUrl}
          alt="Profile"
          sx={{ width: 100, height: 100, borderRadius: "50%", marginBottom: 2 }}
        />
        <Typography p={2} variant="body2" color="text.primary">
          Edit profile image
        </Typography>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
        />
      </Box>
      <Button
        type="submit"
        display="flex"
        variant="contained"
        color="primary"
        sx={{
          marginTop: 3,
          marginBottom: 2,
          padding: "10px 22px",
          fontSize: "14px",
          backgroundColor: "#1565c0",
        }}
      >
        Done
      </Button>
    </>
  );
}
