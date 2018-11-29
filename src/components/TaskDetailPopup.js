import React from 'react';
import './TaskDetailPopup.scss';

const popupName = 'TaskDetailPopup';

const TaskDetailPopup = props => (
  <ul className="TaskDetailPopup" data-visible={props.display.name === popupName && props.display.show} style={{
    left: props.display.pageX,
    top: props.display.pageY
  }}>
    <li><button onClick={e => {
      props.dispatch('todoAddSibling', props.display.id);
      props.dispatch('todoPopup', props.display.id, popupName, e)
    }}>タスクを追加</button></li>
    <li><button onClick={e => {
      props.dispatch('todoAddChild', props.display.id);
      props.dispatch('todoPopup', props.display.id, popupName, e)
    }}>サブタスクを追加</button></li>
    <li><button onClick={e => {
      props.dispatch('todoChangeStar', props.display.id);
      props.dispatch('todoPopup', props.display.id, popupName, e)
    }}>スター</button></li>
    <li><button onClick={e => {
      props.dispatch('todoChangeArchive', props.display.id);
      props.dispatch('todoPopup', props.display.id, popupName, e)
    }}>アーカイブ</button></li>
  </ul>
);

export default TaskDetailPopup;
