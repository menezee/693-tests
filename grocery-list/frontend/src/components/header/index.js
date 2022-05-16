import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/list">List</Link>
        <Link to="/create">Create</Link>
      </nav>
    </header>
  );
}

export default Header;
