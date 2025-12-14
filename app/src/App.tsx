import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import CodeEditor from "./components/CodeEditor/CodeEditor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<CodeEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
