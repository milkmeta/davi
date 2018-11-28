import React from 'react';
import './TaskDetailItem.css';
import TaskDetailPanel from './TaskDetailPanel';

const TaskDetailItem = props =>  {
  const item = props.master[props.id];
  return (
    <div className="TaskDetailItem">
      <div className="TaskDetailItem__self">
        <input type="text" className="TaskDetailItem__text TaskDetailItem__text--title" defaultValue={item.title} />
        <input type="text" className="TaskDetailItem__text TaskDetailItem__text--date" defaultValue={item.date} />
        <button className="TaskDetailItem__button">menu</button>
      </div>
      <div className="TaskDetailItem__children">
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
