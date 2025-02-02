import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home Component/Home';
import ComingSoon from './Coming-soon';
import ReservationsPage from './Reservations Component/Reservations-page';

function Nav() {
  return (
    <Router>
      <nav className="App-nav">
        <Link to="/">
        <img src="little-lemon-logo.svg" alt="logo"/>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/menu" element={<ComingSoon />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/order-online" element={<ComingSoon />} />
        <Route path="/login" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default Nav;