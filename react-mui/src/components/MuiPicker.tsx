// yarn add date-fns @date-io/date-fns

import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import React from "react";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  console.log(selectedDate);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
    </Stack>
  );
};
