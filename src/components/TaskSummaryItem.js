import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskSummaryItem.scss';

const TaskSummaryItem = props => {
  const itemDefault = {
    title: ''
  };
  const itemRaw = props.master[props.id];
  const item = Object.assign({}, itemDefault, itemRaw);

  return (
    <div className="TaskSummaryItem" data-checked={item.checked}>
      <input type="text" className="TaskSummaryItem__title" value={item.title} onChange={e => props.dispatch('todoChangeText', props.id, 'title', e.target.value)} />
      <button className="TaskSummaryItem__button" onClick={e => props.dispatch('todoPopup', 'TaskSummaryPopup', props.id, e)}>
        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
      </button>
    </div>
  );
};

TaskSummaryItem.defaultProps = {
  id: ''
};

export default TaskSummaryItem;
