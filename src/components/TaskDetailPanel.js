import React from 'react';
import './TaskDetailPanel.css';
import TaskDetailItem from './TaskDetailItem';

const TaskDetailPanel = props =>  (
  <div className="TaskDetailPanel">
    <ul className="TaskDetailPanel__list">
      {props.children.map(id => (
        <TaskDetailItem key={id} master={props.master} id={id} dispatch={props.dispatch} />
      ))}
    </ul>
  </div>
);

TaskDetailPanel.defaultProps = {
  master: {},
  children: []
};

export default TaskDetailPanel;
