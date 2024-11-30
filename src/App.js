import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      {!isLoginPage && <Header />}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;