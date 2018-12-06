import React from 'react';
import EventListener from 'react-event-listener';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Header from './Header';
import TaskPopup from './TaskPopup';
import TaskSummaryList from './TaskSummaryList';
import TaskSummaryPopup from './TaskSummaryPopup';
import TaskDetailList from './TaskDetailList';
import TaskDetailPopup from './TaskDetailPopup';
import './Home.scss';

library.add(fas, fab, far);

const Home = props => {
  const windowEvent = e => props.dispatch('windowResize', e);
  return (
    <div className="Home">
      <header className="Home__header">
        <Header dispatch={props.dispatch} />
      </header>
      <div className="Home__body">
        <aside className="Home__aside">
          <TaskSummaryList master={props.master} childrenIds={[props.rootId]} dispatch={props.dispatch} />
          <TaskPopup name="TaskSummaryPopup" master={props.master} window={props.window} settings={props.popup} dispatch={props.dispatch}>
            <TaskSummaryPopup dispatch={props.dispatch} />
          </TaskPopup>
        </aside>
        <main className="Home__main">
          <TaskDetailList master={props.master} childrenIds={[props.rootId]} dispatch={props.dispatch} />
          <TaskPopup name="TaskDetailPopup" master={props.master} window={props.window} settings={props.popup} dispatch={props.dispatch}>
            <TaskDetailPopup dispatch={props.dispatch} />
          </TaskPopup>
        </main>
      </div>
      <EventListener target="window" onLoad={windowEvent} onResize={windowEvent} onScroll={windowEvent} />
    </div>
  );
};

Home.defaultProps = {
  master: {},
  rootId: ''
};

export default Home;
