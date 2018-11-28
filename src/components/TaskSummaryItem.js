import React from 'react';
import './TaskSummaryItem.css';

const TaskSummaryItem = props =>  (
  <div className="TaskSummaryItem">{props.title}</div>
);

export default TaskSummaryItem;
