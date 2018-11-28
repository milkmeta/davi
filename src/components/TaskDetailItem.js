import React from 'react';
import './TaskDetailItem.css';
import TaskDetailPanel from './TaskDetailPanel';

const TaskDetailItem = props =>  {
  const item = props.master[props.id];
  return (
    <div className="TaskDetailItem">
      <div>
        <input type="text" className="TaskDetailItem__title" defaultValue={item.title} />
        <input type="text" className="TaskDetailItem__date" defaultValue={item.date} />
        <button>menu</button>
      </div>
      <div>
        <TaskDetailPanel master={props.master} children={item.children} dispatch={props.dispatch} />
      </div>
    </div>
  );
};

TaskDetailItem.defaultProps = {
  master: {},
  id: ''
};

export default TaskDetailItem;
