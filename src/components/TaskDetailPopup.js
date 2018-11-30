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
  const item = Object.assign({}, itemDefault, itemRaw);

  return (
    <ul className="TaskDetailPopup" data-visible={name === popupName && show} style={{
      left: pageX,
      top: pageY
    }}>
      <li>
        <button disabled={item.isRoot} onClick={e => {
          props.dispatch('todoAddSibling', itemId);
          props.dispatch('todoPopup', popupName, itemId);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'plus']} />
          <span className="TaskDetailPopup__text">タスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={e => {
          props.dispatch('todoAddChild', itemId);
          props.dispatch('todoPopup', popupName, itemId);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'level-down-alt']} />
          <span className="TaskDetailPopup__text">サブタスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={e => {
          props.dispatch('todoChangeStar', itemId);
          props.dispatch('todoPopup', popupName, itemId);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={[(!item.starred ? 'fas' : 'far'), 'star']} />
          <span className="TaskDetailPopup__text">{!item.starred ? 'スターをつける' : 'スターを外す'}</span>
      </button>
      </li>
      <li>
        <button disabled={item.isRoot} onClick={e => {
          props.dispatch('todoChangeArchive', itemId);
          props.dispatch('todoPopup', popupName, itemId);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'archive']} />
          <span className="TaskDetailPopup__text">{!item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
        </button>
      </li>
      <li>
        <button disabled={item.isRoot} onClick={e => {
          props.dispatch('todoDelete', itemId);
          props.dispatch('todoPopup', popupName, itemId);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'trash-alt']} />
          <span className="TaskDetailPopup__text">削除</span>
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
