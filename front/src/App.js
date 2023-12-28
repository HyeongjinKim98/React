import {Route, Routes} from "react-router-dom";
import React from "react";
import Board from "./routes/Board";
import Home from "./routes/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Write from "./routes/Write";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/board" element={<Board/>} />
        <Route path="/write" element={<Write/>} />
      </Routes>
    </>
  );
}

export default App;
