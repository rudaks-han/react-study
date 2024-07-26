import { Slider } from "@mui/material";

export const DemoPage = () => {
  return (
    <Slider
      defaultValue={30}
      sx={{
        width: 300,
        color: "success.main",
      }}
    />
  );
};
