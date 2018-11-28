import React from 'react';
import './Header.scss';

const Header = props => (
  <div className="Header">
    <h1 className="Header__title">Davi</h1>
    <p className="Header__about"><a href="https://github.com/milkmeta/davi" target="_blank" rel="noopener noreferrer">milkmeta/davi</a></p>
  </div>
);

export default Header;
