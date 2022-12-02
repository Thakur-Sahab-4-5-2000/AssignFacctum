import "./App.css";
import React from "react";
import Occupation from "./components/Occupation";
import Birth from "./components/Birth";
import Attachment from "./components/Attachment";

function App() {
  return (
    <div className="App">
      <Occupation />
      <Birth />
      <Attachment />
    </div>
  );
}

export default App;
