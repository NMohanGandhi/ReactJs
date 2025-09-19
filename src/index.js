import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ Must wrap inside BrowserRouter */}
    <BrowserRouter>
      <Routes>
        {/* ✅ In v6, use element={<Component />} instead of component={Component} */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
