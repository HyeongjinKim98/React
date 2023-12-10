import {Route, Routes} from "react-router-dom";
import React from "react";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <h2>Content</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
      </Routes>
    </>
  );
}

export default App;
