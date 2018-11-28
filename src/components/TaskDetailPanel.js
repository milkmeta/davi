import React from 'react';
import './TaskDetailPanel.css';
import TaskDetailItem from './TaskDetailItem';

const TaskDetailPanel = props =>  (
  <div className="TaskDetailPanel">
    <ul className="TaskDetailPanel__list">
      <TaskDetailItem title="あいうえお" date="01/01" />
      <TaskDetailItem title="かきくけこ" date="02/01" />
      <TaskDetailItem title="さしすせそ" date="03/01" />
    </ul>
  </div>
);

export default TaskDetailPanel;
