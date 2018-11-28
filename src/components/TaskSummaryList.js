import React from 'react';
import './TaskSummaryList.scss';
import TaskSummaryItem from './TaskSummaryItem';

const TaskSummaryList = props => {
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
    <div className="TaskSummaryList">
      <ul className="TaskSummaryList__list">
        {starredIds.map(id => (
          <li key={id}>
            <TaskSummaryItem master={props.master} id={id} dispatch={props.dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskSummaryList.defaultProps = {
  master: {},
  children: []
};

export default TaskSummaryList;
