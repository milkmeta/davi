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
          <FontAwesomeIcon className="TaskPopup__icon" icon={['fas', 'plus']} />
          <span className="TaskPopup__text">タスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={() => {
          props.dispatch('todoAddChild', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopup__icon" icon={['fas', 'level-down-alt']} />
          <span className="TaskPopup__text">サブタスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={() => {
          props.dispatch('todoChangeStar', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopup__icon" icon={[(!props.item.starred ? 'fas' : 'far'), 'star']} />
          <span className="TaskPopup__text">{!props.item.starred ? 'スターをつける' : 'スターを外す'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoChangeArchive', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopup__icon" icon={['fas', 'archive']} />
          <span className="TaskPopup__text">{!props.item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoDelete', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopup__icon" icon={['fas', 'trash-alt']} />
          <span className="TaskPopup__text">削除</span>
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
