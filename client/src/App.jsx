import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar.jsx';
import holidaypage from './holidaypage.jsx';
import aboutpage from './aboutpage.jsx';

export default function App() {
  const [guestbook, setGuestbook] = useState([]);

  useEffect(() => {
    async function fetchGuestbook() {
      await getGuestbook();
    }
    fetchGuestbook();
  }, []);

  async function getGuestbook() {
    const response = await fetch("http://localhost:8080/guestbook");
    const data = await response.json();
    setGuestbook(data);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/holiday" element={<holidaypage guestbook={guestbook} />} />
        <Route path="/today" element={<todaypage guestbook={guestbook} />} />
        <Route path="/about" element={<aboutpage guestbook={guestbook} />} />
      </Routes>
    </Router>
  );
}
