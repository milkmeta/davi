import React from 'react';
import './TaskDetailItem.css';

const TaskDetailItem = props =>  (
  <div className="TaskDetailItem">
    <input type="text" className="TaskDetailItem__title" defaultValue={props.title} />
    <input type="text" className="TaskDetailItem__date" defaultValue={props.date} />
    <button>menu</button>
  </div>
);

export default TaskDetailItem;
