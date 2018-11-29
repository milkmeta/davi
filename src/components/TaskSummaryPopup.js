import React from 'react';
import './TaskSummaryPopup.scss';

const TaskSummaryPopup = props => {
  const popupName = 'TaskSummaryPopup';
  const { name, itemId, show, pageX, pageY} = props.display;
  const itemDefault = {
    isRoot: false
  };
  const itemRaw = props.master[itemId];
  const item = Object.assign(itemDefault, itemRaw);

  return (
    <ul className="TaskSummaryPopup" data-visible={name === popupName && show} style={{
      left: pageX,
      top: pageY
    }}>
      <li><button onClick={e => {
        props.dispatch('todoChangeStar', itemId);
        props.dispatch('todoPopup', itemId, popupName, e)
      }}>スター</button></li>
      <li><button disabled={item.isRoot} onClick={e => {
        props.dispatch('todoChangeArchive', itemId);
        props.dispatch('todoPopup', itemId, popupName, e)
      }}>アーカイブ</button></li>
      <li><button disabled={item.isRoot} onClick={e => {
        props.dispatch('todoDelete', itemId);
        props.dispatch('todoPopup', itemId, popupName, e)
      }}>削除</button></li>
    </ul>
  );
};

TaskSummaryPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskSummaryPopup;
