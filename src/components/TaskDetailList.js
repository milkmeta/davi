import React from 'react';
import './TaskDetailList.scss';
import TaskDetailItem from './TaskDetailItem';

const TaskDetailList = props => (
  <div className="TaskDetailList">
    <ul className="TaskDetailList__list">
      {props.children.map(id => (
        <li key={id}>
          <TaskDetailItem master={props.master} id={id} dispatch={props.dispatch} />
        </li>
      ))}
    </ul>
  </div>
);

TaskDetailList.defaultProps = {
  master: {},
  children: []
};

export default TaskDetailList;
