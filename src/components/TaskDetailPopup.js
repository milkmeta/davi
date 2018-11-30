import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <li>
        <button disabled={item.isRoot} onClick={e => {
          props.dispatch('todoAddSibling', itemId);
          props.dispatch('todoPopup', itemId, popupName, e)
        }}>
          <FontAwesomeIcon icon={['fas', 'plus']} />
          <span>タスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={e => {
          props.dispatch('todoAddChild', itemId);
          props.dispatch('todoPopup', itemId, popupName, e)
        }}>
          <FontAwesomeIcon icon={['fas', 'level-down-alt']} />
          <span>サブタスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={e => {
          props.dispatch('todoChangeStar', itemId);
          props.dispatch('todoPopup', itemId, popupName, e)
        }}>
          <FontAwesomeIcon icon={[(!item.starred ? 'fas' : 'far'), 'star']} />
          <span>{!item.starred ? 'スターをつける' : 'スターを外す'}</span>
      </button>
      </li>
      <li>
        <button disabled={item.isRoot} onClick={e => {
          props.dispatch('todoChangeArchive', itemId);
          props.dispatch('todoPopup', itemId, popupName, e)
        }}>
          <FontAwesomeIcon icon={['fas', 'archive']} />
          <span>アーカイブ</span>
        </button>
      </li>
      <li>
        <button disabled={item.isRoot} onClick={e => {
          props.dispatch('todoDelete', itemId);
          props.dispatch('todoPopup', itemId, popupName, e)
        }}>
          <FontAwesomeIcon icon={['fas', 'trash-alt']} />
          <span>削除</span>
        </button>
      </li>
    </ul>
  );
};

TaskDetailPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskDetailPopup;
