import React, { useState } from "react";
import Box from "@mui/material/Box";
import "../scss/birth.scss";
import TextField from "@mui/material/TextField";

const Birth = () => {
  const [birth, setBirth] = useState("");
  const handleChange = (e) => {
    setBirth(e.target.value);
  };
  return (
    <div className="birth">
      <h1>Birth</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Birth Place"
          variant="outlined"
          sx={{ width: 200 }}
          value={birth}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

export default Birth;
