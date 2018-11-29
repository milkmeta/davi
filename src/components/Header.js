import React from 'react';
import './Header.scss';

const Header = props => (
  <div className="Header">
    <h1 className="Header__title">Davi</h1>
    <ul className="Header__link">
      <li><button onClick={() => props.dispatch('todoLoadState', 'sample')}>Load sample data</button></li>
      <li><button onClick={() => props.dispatch('todoLoadState', 'reset')}>Reset</button></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/milkmeta/davi">milkmeta/davi</a></li>
    </ul>
  </div>
);

export default Header;
