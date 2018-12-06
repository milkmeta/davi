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
      if (item.childrenIds) {
        foundIds.push(...scanStarredIds(item.childrenIds));
      }
    });
    return foundIds;
  };
  const starredIds = scanStarredIds(props.childrenIds);
  // TODO: ID走査時の無限ループの阻止

  return (
    <ul className="TaskSummaryList">
      {starredIds.map(id => (
        <li key={id}>
          <TaskSummaryItem id={id} {...props} />
        </li>
      ))}
    </ul>
  );
};

TaskSummaryList.defaultProps = {
  master: {},
  childrenIds: []
};

export default TaskSummaryList;
