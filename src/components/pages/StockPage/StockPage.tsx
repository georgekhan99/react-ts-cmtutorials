import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
type StockPageProps = {
  //
};

export default function BasicButtons() {
  return (
    <Stack spacing={1} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
