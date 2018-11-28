import React from 'react';
import './TaskSummaryPanel.scss';
import TaskSummaryItem from './TaskSummaryItem';

const TaskSummaryPanel = props => {
  let starredIds = [];
  const scanStarredIds = (id) => {
    const item = props.master[id];
    console.log(item.title);
    if (item.starred) {
      starredIds.push(id);
    }
    if (item.children) {
      item.children.forEach(v => {
        scanStarredIds(v);
      });
    }
  }
  props.children.forEach(v => {
    scanStarredIds(v);
  });

  return (
    <div className="TaskSummaryPanel">
      <ul className="TaskSummaryPanel__list">
        {starredIds.map(id => (
          <li key={id}>
            <TaskSummaryItem master={props.master} id={id} dispatch={props.dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskSummaryPanel.defaultProps = {
  master: {},
  children: []
};

export default TaskSummaryPanel;
