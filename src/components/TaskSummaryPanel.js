import React from 'react';
import './TaskSummaryPanel.scss';
import TaskSummaryItem from './TaskSummaryItem';

const TaskSummaryPanel = props => (
  <div className="TaskSummaryPanel">
    <ul className="TaskSummaryPanel__list">
      <TaskSummaryItem title="あいうえお" />
      <TaskSummaryItem title="かきくけこ" />
      <TaskSummaryItem title="さしすせそ" />
    </ul>
  </div>
);

export default TaskSummaryPanel;
