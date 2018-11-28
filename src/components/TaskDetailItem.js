import React from 'react';
import './TaskDetailItem.css';

const TaskDetailItem = props =>  (
  <div className="TaskDetailItem">{props.title}</div>
);

export default TaskDetailItem;
