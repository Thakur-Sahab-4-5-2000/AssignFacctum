import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../scss/attachment.scss";

const Attachment = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    setName(event.target.files[0].name);
    setDesc(event.target.files[0].lastModifiedDate);
  };
  return (
    <div className="attachment">
      <h1>Attachment</h1>
      <div className="name">
        <input
          type="file"
          accept="/*"
          multiple
          max-size="2000000"
          onChange={handleChange}
          className="name-input"
        />

        <TextField
          className="text"
          id="outlined-basic"
          variant="outlined"
          sx={{ width: 300 }}
          placeholder="Name"
          value={name}
        />

        <TextField
          className="text"
          id="outlined-basic"
          variant="outlined"
          sx={{ width: 700 }}
          placeholder="Desc"
          value={desc}
        />
      </div>
    </div>
  );
};

export default Attachment;
