import React from 'react';
import './TaskDetailPanel.css';
import TaskDetailItem from './TaskDetailItem';

const TaskDetailPanel = props =>  (
  <div className="TaskDetailPanel">
    <ul className="TaskDetailPanel__list">
      {props.children.map(id => (
        <li key={id}>
          <TaskDetailItem master={props.master} id={id} dispatch={props.dispatch} />
        </li>
      ))}
    </ul>
  </div>
);

TaskDetailPanel.defaultProps = {
  master: {},
  children: []
};

export default TaskDetailPanel;
