import React from 'react';
import './Main.css';
import Header from './Header';

const Main = props =>  (
  <div className="Main">
    <header className="Main__header">
      <Header dispatch={props.dispatch} />
    </header>
    <div className="Main__body">
      <aside className="Main__aside">
        aside
      </aside>
      <main className="Main__main">
        main
      </main>
    </div>
  </div>
);

export default Main;
