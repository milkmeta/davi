import React from 'react';
import './TaskDetailItem.scss';
import TaskDetailPanel from './TaskDetailPanel';

const TaskDetailItem = props => {
  const item = props.master[props.id];
  if (item.archived) {
    return false;
  }
  return (
    <div className="TaskDetailItem" data-starred={item.starred} data-checked={item.checked}>
      <div className="TaskDetailItem__self">
        <input type="text" className="TaskDetailItem__title" defaultValue={item.title} />
        <input type="text" className="TaskDetailItem__date" defaultValue={item.date} />
        <button className="TaskDetailItem__button">menu</button>
      </div>
      <div className="TaskDetailItem__children">
        {item.children ? <TaskDetailPanel master={props.master} children={item.children} dispatch={props.dispatch} /> : null}
      </div>
    </div>
  );
};

TaskDetailItem.defaultProps = {
  master: {},
  id: ''
};

export default TaskDetailItem;
