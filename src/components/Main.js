import React from 'react';
import EventListener from 'react-event-listener';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import TaskSummaryList from './TaskSummaryList';
import TaskSummaryPopup from './TaskSummaryPopup';
import TaskDetailList from './TaskDetailList';
import TaskDetailPopup from './TaskDetailPopup';
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
        <TaskSummaryPopup display={props.popup} dispatch={props.dispatch}/>
      </aside>
      <main className="Main__main">
        <TaskDetailList master={props.master} children={[props.rootId]} dispatch={props.dispatch} />
        <TaskDetailPopup display={props.popup} dispatch={props.dispatch}/>
      </main>
    </div>
    <EventListener target="window" onResize={e => props.dispatch('windowResize')} />
  </div>
);

Main.defaultProps = {
  master: {},
  rootId: ''
};

export default Main;
