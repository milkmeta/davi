import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskPopupInner.scss';

const TaskSummaryPopup = props => (
  <ul className="TaskPopupInner">
    <li>
      <button onClick={() => {
        props.dispatch('todoChangeBoolean', props.id, 'starred');
        props.dispatch('todoPopup', false);
      }}>
        <FontAwesomeIcon className="TaskPopupInner__icon" icon={[(!props.item.starred ? 'fas' : 'far'), 'star']} />
        <span className="TaskPopupInner__text">{!props.item.starred ? 'スターをつける' : 'スターを外す'}</span>
      </button>
    </li>
    <li>
      <button disabled={props.item.isRoot} onClick={() => {
        props.dispatch('todoChangeBoolean', props.id, 'archived');
        props.dispatch('todoPopup', false);
      }}>
        <FontAwesomeIcon className="TaskPopupInner__icon" icon={['fas', 'archive']} />
        <span className="TaskPopupInner__text">{!props.item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
      </button>
    </li>
    <li>
      <button disabled={props.item.isRoot} onClick={() => {
        props.dispatch('todoDelete', props.id);
        props.dispatch('todoPopup', false);
      }}>
        <FontAwesomeIcon className="TaskPopupInner__icon" icon={['fas', 'trash-alt']} />
        <span className="TaskPopupInner__text">削除</span>
      </button>
    </li>
  </ul>
);

TaskSummaryPopup.defaultProps = {
  id: '',
  item: {}
};

export default TaskSummaryPopup;
