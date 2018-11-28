import React from 'react';
import './TaskSummaryPanel.scss';
import TaskSummaryItem from './TaskSummaryItem';

const TaskSummaryPanel = props => {
  const scanStarredIds = (ids) => {
    let foundIds = [];
    ids.forEach(id => {
      const item = props.master[id];
      if (item.starred) {
        foundIds.push(id);
      }
      if (item.children) {
        Array.prototype.push.apply(foundIds, scanStarredIds(item.children));
      }
    });
    return foundIds;
  }
  const starredIds = scanStarredIds(props.children);
  // TODO: ID走査時の無限ループの阻止

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
