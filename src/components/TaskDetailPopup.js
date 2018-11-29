import React from 'react';
import './TaskDetailPopup.scss';

const TaskDetailPopup = props => {
  const popupName = 'TaskDetailPopup';
  const { name, id, show, pageX, pageY} = props.display;
  const itemDefault = {
    isRoot: false
  };
  const itemRaw = props.master[id];
  const item = Object.assign(itemDefault, itemRaw);

  return (
    <ul className="TaskDetailPopup" data-visible={name === popupName && show} style={{
      left: pageX,
      top: pageY
    }}>
      <li><button disabled={item.isRoot} onClick={e => {
        props.dispatch('todoAddSibling', id);
        props.dispatch('todoPopup', id, popupName, e)
      }}>タスクを追加</button></li>
      <li><button onClick={e => {
        props.dispatch('todoAddChild', id);
        props.dispatch('todoPopup', id, popupName, e)
      }}>サブタスクを追加</button></li>
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

TaskDetailPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskDetailPopup;
