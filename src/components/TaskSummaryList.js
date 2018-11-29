import React from 'react';
import TaskSummaryItem from './TaskSummaryItem';
import './TaskSummaryList.scss';

const TaskSummaryList = props => {
  const scanStarredIds = ids => {
    const foundIds = [];
    ids.forEach(id => {
      const item = props.master[id];
      if (item.starred) {
        foundIds.push(id);
      }
      if (item.childIds) {
        foundIds.push(...scanStarredIds(item.childIds));
      }
    });
    return foundIds;
  };
  const starredIds = scanStarredIds(props.childIds);
  // TODO: ID走査時の無限ループの阻止

  return (
    <ul className="TaskSummaryList">
      {starredIds.map(id => (
        <li key={id}>
          <TaskSummaryItem master={props.master} id={id} dispatch={props.dispatch} />
        </li>
      ))}
    </ul>
  );
};

TaskSummaryList.defaultProps = {
  master: {},
  childIds: []
};

export default TaskSummaryList;
