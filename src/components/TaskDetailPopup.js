import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskPopupInner.scss';

const TaskDetailPopup = props => {
  const popupName = 'TaskDetailPopup';
  return (
    <ul className="TaskPopupInner">
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoAddSibling', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopupInner__icon" icon={['fas', 'plus']} />
          <span className="TaskPopupInner__text">タスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={() => {
          props.dispatch('todoAddChild', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopupInner__icon" icon={['fas', 'level-down-alt']} />
          <span className="TaskPopupInner__text">サブタスクを追加</span>
        </button>
      </li>
      <li>
        <button onClick={() => {
          props.dispatch('todoChangeStar', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopupInner__icon" icon={[(!props.item.starred ? 'fas' : 'far'), 'star']} />
          <span className="TaskPopupInner__text">{!props.item.starred ? 'スターをつける' : 'スターを外す'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoChangeArchive', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopupInner__icon" icon={['fas', 'archive']} />
          <span className="TaskPopupInner__text">{!props.item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoDelete', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskPopupInner__icon" icon={['fas', 'trash-alt']} />
          <span className="TaskPopupInner__text">削除</span>
        </button>
      </li>
    </ul>
  );
};

TaskDetailPopup.defaultProps = {
  id: '',
  item: {}
};

export default TaskDetailPopup;
