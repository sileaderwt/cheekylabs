import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Welcome from './pages/Welcome';
import LISVisualizer from "./DP/question1/LISVisualizer";

function App() {
  return (
      <Router>
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 w-100">
            <Routes>
              <Route path="/" element={<Welcome />} />
            </Routes>
              <Routes>
                  <Route path="/first" element={<LISVisualizer />} />
              </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
