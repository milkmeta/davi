import React from 'react';
import './TaskSummaryItem.scss';

const TaskSummaryItem = props => {
  const item = props.master[props.id];
  return (
    <div className="TaskSummaryItem" data-checked={item.checked}>
      <input type="text" className="TaskSummaryItem__title" defaultValue={item.title} />
      <button className="TaskSummaryItem__button">menu</button>
    </div>
  );
};

TaskSummaryItem.defaultProps = {
  master: {},
  id: ''
};

export default TaskSummaryItem;
