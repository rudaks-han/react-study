import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Chip"
        color="primary"
        size="small"
        icon={<FaceIcon />}
      ></Chip>
      <Chip
        label="Chip"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip label="Delete" color={"error"} onDelete={() => alert("Deleted")} />
      {chips.map((chip, index) => (
        <Chip key={index} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
