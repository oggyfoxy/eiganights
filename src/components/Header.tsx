import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">eiganights</div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/library">library</Link>
        <Link to="/explore">explore</Link>
        <Link to="/profile">profile</Link>
      </nav>
    </header>
  );
};

export default Header;
