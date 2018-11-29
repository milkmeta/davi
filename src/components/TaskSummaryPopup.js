import React from 'react';
import './TaskSummaryPopup.scss';

const TaskSummaryPopup = props => (
  <ul className="TaskSummaryPopup" data-visible={props.display.name === 'todoSummaryPopup' && props.display.show} style={{
    left: props.display.pageX,
    top: props.display.pageY
  }}>
    <li><button onClick={e => {
      props.dispatch('todoChangeStar', props.display.id);
      props.dispatch('todoPopup', props.display.id, 'todoSummaryPopup', e)
    }}>スター</button></li>
    <li><button onClick={e => {
      props.dispatch('todoChangeArchive', props.display.id);
      props.dispatch('todoPopup', props.display.id, 'todoSummaryPopup', e)
    }}>アーカイブ</button></li>
  </ul>
);

export default TaskSummaryPopup;
