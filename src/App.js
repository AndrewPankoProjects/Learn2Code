import './App.css';
import Home from './sections/Home/home.js';
import Documentation from './sections/Documentation/documentation.js';
import Sandbox from './sections/Sandbox/sandbox.js';
import Quiz from './sections/Quiz/quiz.js';
import Navbar from './assets/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/documentation" element={<Documentation />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}