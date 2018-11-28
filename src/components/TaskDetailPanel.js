import React from 'react';
import './TaskDetailPanel.css';
import TaskDetailItem from './TaskDetailItem';

const TaskDetailPanel = props =>  (
  <div className="TaskDetailPanel">
    <ul className="TaskDetailPanel__list">
      <TaskDetailItem title="あいうえお" />
      <TaskDetailItem title="かきくけこ" />
      <TaskDetailItem title="さしすせそ" />
    </ul>
  </div>
);

export default TaskDetailPanel;
