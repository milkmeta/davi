import React from 'react';
import EventListener from 'react-event-listener';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import TaskSummaryList from './TaskSummaryList';
import TaskSummaryPopup from './TaskSummaryPopup';
import TaskDetailList from './TaskDetailList';
import TaskDetailPopup from './TaskDetailPopup';
import './Home.scss';

library.add(fas);

const Home = props => (
  <div className="Home">
    <header className="Home__header">
      <Header dispatch={props.dispatch} />
    </header>
    <div className="Home__body">
      <aside className="Home__aside">
        <TaskSummaryList master={props.master} childIds={[props.rootId]} dispatch={props.dispatch} />
        <TaskSummaryPopup master={props.master} display={props.popup} dispatch={props.dispatch}/>
      </aside>
      <main className="Home__main">
        <TaskDetailList master={props.master} childIds={[props.rootId]} dispatch={props.dispatch} />
        <TaskDetailPopup master={props.master} display={props.popup} dispatch={props.dispatch}/>
      </main>
    </div>
    <EventListener target="window" onResize={() => props.dispatch('windowResize')} />
  </div>
);

Home.defaultProps = {
  master: {},
  rootId: ''
};

export default Home;
