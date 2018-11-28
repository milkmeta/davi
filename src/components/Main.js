import React from 'react';
import './Main.scss';
import Header from './Header';
import TaskSummaryPanel from './TaskSummaryPanel';
import TaskDetailPanel from './TaskDetailPanel';

const Main = props => (
  <div className="Main">
    <header className="Main__header">
      <Header dispatch={props.dispatch} />
    </header>
    <div className="Main__body">
      <aside className="Main__aside">
        <TaskSummaryPanel dispatch={props.dispatch} />
      </aside>
      <main className="Main__main">
        <TaskDetailPanel master={props.master} children={[props.rootId]} dispatch={props.dispatch} />
      </main>
    </div>
  </div>
);

Main.defaultProps = {
  master: {},
  rootId: ''
};

export default Main;
