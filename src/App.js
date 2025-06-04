import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/body'; 
import FlagDetails from './components/flags'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/flag/:name" element={<FlagDetails />} />
      </Routes>
    </Router>
  );
};

export default App;