import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskDetailPopup = props => {
  const popupName = 'TaskDetailPopup';
  return (
    <ul>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoAddSibling', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'plus']} />
          <span className="TaskDetailPopup__text">タスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={() => {
          props.dispatch('todoAddChild', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'level-down-alt']} />
          <span className="TaskDetailPopup__text">サブタスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={() => {
          props.dispatch('todoChangeStar', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={[(!props.item.starred ? 'fas' : 'far'), 'star']} />
          <span className="TaskDetailPopup__text">{!props.item.starred ? 'スターをつける' : 'スターを外す'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoChangeArchive', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'archive']} />
          <span className="TaskDetailPopup__text">{!props.item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoDelete', props.id);
          props.dispatch('todoPopup', popupName, props.id);
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
  window: {},
  popup: {}
};

export default TaskDetailPopup;
