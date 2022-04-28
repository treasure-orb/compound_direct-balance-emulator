import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StatusSimulator from './status_simulator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StatusSimulator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
