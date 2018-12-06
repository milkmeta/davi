import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskSummaryPopup = props => {
  const popupName = 'TaskSummaryPopup';
  return (
    <ul>
      <li>
        <button onClick={() => {
          props.dispatch('todoChangeStar', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={[(!props.item.starred ? 'fas' : 'far'), 'star']} />
          <span className="TaskSummaryPopup__text">{!props.item.starred ? 'スターをつける' : 'スターを外す'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoChangeArchive', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={['fas', 'archive']} />
          <span className="TaskSummaryPopup__text">{!props.item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
        </button>
      </li>
      <li>
        <button disabled={props.item.isRoot} onClick={() => {
          props.dispatch('todoDelete', props.id);
          props.dispatch('todoPopup', popupName, props.id);
        }}>
          <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={['fas', 'trash-alt']} />
          <span className="TaskSummaryPopup__text">削除</span>
        </button>
      </li>
    </ul>
  );
};

TaskSummaryPopup.defaultProps = {
  master: {},
  window: {},
  popup: {}
};

export default TaskSummaryPopup;
