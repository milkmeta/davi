import React from 'react';
import './Main.css';
import Header from './Header';
import TaskDetailPanel from './TaskDetailPanel';

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
        <TaskDetailPanel dispatch={props.dispatch} />
      </main>
    </div>
  </div>
);

export default Main;