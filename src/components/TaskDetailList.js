import React from 'react';
import TaskDetailItem from './TaskDetailItem';
import './TaskDetailList.scss';

const TaskDetailList = props => (
  <ul className="TaskDetailList">
    {props.childrenIds.map(id => (
      <li key={id}>
        <TaskDetailItem master={props.master} id={id} dispatch={props.dispatch} />
      </li>
    ))}
  </ul>
);

TaskDetailList.defaultProps = {
  master: {},
  childrenIds: []
};

export default TaskDetailList;
