import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import TaskSummaryList from './TaskSummaryList';
import TaskDetailList from './TaskDetailList';
import './Main.scss';

library.add(fas);

const Main = props => (
  <div className="Main">
    <header className="Main__header">
      <Header dispatch={props.dispatch} />
    </header>
    <div className="Main__body">
      <aside className="Main__aside">
        <TaskSummaryList master={props.master} children={[props.rootId]} dispatch={props.dispatch} />
      </aside>
      <main className="Main__main">
        <TaskDetailList master={props.master} children={[props.rootId]} dispatch={props.dispatch} />
      </main>
    </div>
  </div>
);

Main.defaultProps = {
  master: {},
  rootId: ''
};

export default Main;
