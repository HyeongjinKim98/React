import {Route, Routes} from "react-router-dom";
import React from "react";
import Board from "./routes/Board";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;
