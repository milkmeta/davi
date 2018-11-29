import React from 'react';
import './TaskDetailPopup.scss';

const TaskDetailPopup = props => {
  const popupName = 'TaskDetailPopup';
  const { name, itemId, show, pageX, pageY} = props.display;
  const itemDefault = {
    isRoot: false
  };
  const itemRaw = props.master[itemId];
  const item = Object.assign(itemDefault, itemRaw);

  return (
    <ul className="TaskDetailPopup" data-visible={name === popupName && show} style={{
      left: pageX,
      top: pageY
    }}>
      <li><button disabled={item.isRoot} onClick={e => {
        props.dispatch('todoAddSibling', itemId);
        props.dispatch('todoPopup', itemId, popupName, e)
      }}>タスクを追加</button></li>
      <li><button onClick={e => {
        props.dispatch('todoAddChild', itemId);
        props.dispatch('todoPopup', itemId, popupName, e)
      }}>サブタスクを追加</button></li>
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

TaskDetailPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskDetailPopup;
