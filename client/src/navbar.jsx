import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/holiday">Where I've Been on Holiday</Link>
        </li>
        <li>
          <Link to="/today">What I'm Up to Today</Link>
        </li>
        <li>
          <Link to="/about">About Myself</Link>
        </li>
      </ul>
    </nav>
  );
}
