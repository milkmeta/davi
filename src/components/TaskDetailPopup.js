import React from 'react';
import './TaskDetailPopup.scss';

const TaskDetailPopup = props => (
  <ul className="TaskDetailPopup" data-visible={props.display.name === 'todoDetailPopup' && props.display.show} style={{
    left: props.display.pageX,
    top: props.display.pageY
  }}>
    <li><button onClick={e => {
      props.dispatch('todoChangeStar', props.display.id);
      props.dispatch('todoPopup', props.display.id, 'todoDetailPopup', e)
    }}>スター</button></li>
    <li><button onClick={e => {
      props.dispatch('todoChangeArchive', props.display.id);
      props.dispatch('todoPopup', props.display.id, 'todoDetailPopup', e)
    }}>アーカイブ</button></li>
  </ul>
);

export default TaskDetailPopup;
