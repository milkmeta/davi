import React from 'react';
import './TaskSummaryPopup.scss';

const TaskSummaryPopup = props => {
  const popupName = 'TaskSummaryPopup';
  const { name, id, show, pageX, pageY} = props.display;
  const itemDefault = {
    isRoot: false
  };
  const itemRaw = props.master[id];
  const item = Object.assign(itemDefault, itemRaw);

  return (
    <ul className="TaskSummaryPopup" data-visible={name === popupName && show} style={{
      left: pageX,
      top: pageY
    }}>
      <li><button onClick={e => {
        props.dispatch('todoChangeStar', id);
        props.dispatch('todoPopup', id, popupName, e)
      }}>スター</button></li>
      <li><button disabled={item.isRoot} onClick={e => {
        props.dispatch('todoChangeArchive', id);
        props.dispatch('todoPopup', id, popupName, e)
      }}>アーカイブ</button></li>
      <li><button disabled={item.isRoot} onClick={e => {
        props.dispatch('todoDelete', id);
        props.dispatch('todoPopup', id, popupName, e)
      }}>削除</button></li>
    </ul>
  );
};

TaskSummaryPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskSummaryPopup;
