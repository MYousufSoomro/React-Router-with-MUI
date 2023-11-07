import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate({ color }) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress color={color} />
    </Box>
  );
}
