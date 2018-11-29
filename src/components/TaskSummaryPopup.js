import React from 'react';
import './TaskSummaryPopup.scss';

const popupName = 'TaskSummaryPopup';

const TaskSummaryPopup = props => (
  <ul className="TaskSummaryPopup" data-visible={props.display.name === popupName && props.display.show} style={{
    left: props.display.pageX,
    top: props.display.pageY
  }}>
    <li><button onClick={e => {
      props.dispatch('todoChangeStar', props.display.id);
      props.dispatch('todoPopup', props.display.id, popupName, e)
    }}>スター</button></li>
    <li><button disabled={props.master[props.display.id] && props.master[props.display.id].isRoot} onClick={e => {
      props.dispatch('todoChangeArchive', props.display.id);
      props.dispatch('todoPopup', props.display.id, popupName, e)
    }}>アーカイブ</button></li>
    <li><button disabled={props.master[props.display.id] && props.master[props.display.id].isRoot} onClick={e => {
      props.dispatch('todoDelete', props.display.id);
      props.dispatch('todoPopup', props.display.id, popupName, e)
    }}>削除</button></li>
  </ul>
);

TaskSummaryPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskSummaryPopup;
