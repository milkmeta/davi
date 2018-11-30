import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <span>{!item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
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

TaskSummaryPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskSummaryPopup;
