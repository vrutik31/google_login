import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoogleSignin from './Component/GoogleSignin';
import Home from './Component/Home';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleSignin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
