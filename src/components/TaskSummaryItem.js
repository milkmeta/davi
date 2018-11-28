import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskSummaryItem.scss';

const TaskSummaryItem = props => {
  const item = props.master[props.id];
  return (
    <div className="TaskSummaryItem" data-checked={item.checked}>
      <input type="text" className="TaskSummaryItem__title" defaultValue={item.title} />
      <button className="TaskSummaryItem__button"><FontAwesomeIcon icon={['fas', 'ellipsis-h']} /></button>
    </div>
  );
};

TaskSummaryItem.defaultProps = {
  master: {},
  id: ''
};

export default TaskSummaryItem;
