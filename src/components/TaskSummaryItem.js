import React from 'react';
import './TaskSummaryItem.scss';

const TaskSummaryItem = props =>  (
  <div className="TaskSummaryItem">{props.title}</div>
);

export default TaskSummaryItem;
