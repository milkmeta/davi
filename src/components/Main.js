import React from 'react';
import './Main.css';

const Main = props =>  (
  <div className="Main">
    <header className="Main__header">
      <Header />
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
