import React from 'react';
import EventListener from 'react-event-listener';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Header from './Header';
import TaskPopupContainer from './TaskPopupContainer';
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
        <Header {...props} />
      </header>
      <div className="Home__body">
        <aside className="Home__aside">
          <TaskSummaryList childrenIds={[props.rootId]} {...props} />
          <TaskPopupContainer name="TaskSummaryPopup" {...props} >
            <TaskSummaryPopup {...props} />
          </TaskPopupContainer>
        </aside>
        <main className="Home__main">
          <TaskDetailList childrenIds={[props.rootId]} {...props} />
          <TaskPopupContainer name="TaskDetailPopup" {...props} >
            <TaskDetailPopup {...props} />
          </TaskPopupContainer>
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
