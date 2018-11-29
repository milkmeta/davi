import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskDetailList from './TaskDetailList';
import './TaskDetailItem.scss';

const TaskDetailItem = props => {
  const item = props.master[props.id];
  const itemInfo = {
    id: props.id
  };
  if (item.archived) {
    return false;
  }
  return (
    <div className="TaskDetailItem" data-starred={item.starred} data-checked={item.checked}>
      <div className="TaskDetailItem__self">
        <input type="checkbox" className="TaskDetailItem__checkbox" defaultChecked={item.checked} />
        <input type="text" className="TaskDetailItem__title" value={typeof item.title !== 'undefined' ? item.title : ''} onChange={e => props.dispatch('todoChangeTitle', itemInfo, e.target.value)} />
        <input type="text" className="TaskDetailItem__date" value={typeof item.date !== 'undefined' ? item.date : ''} onChange={e => props.dispatch('todoChangeDate', itemInfo, e.target.value)} />
        <button className="TaskDetailItem__button"><FontAwesomeIcon icon={['fas', 'ellipsis-h']} /></button>
      </div>
      <div className="TaskDetailItem__children">
        {item.children ? <TaskDetailList master={props.master} children={item.children} dispatch={props.dispatch} /> : null}
      </div>
    </div>
  );
};

TaskDetailItem.defaultProps = {
  master: {},
  id: ''
};

export default TaskDetailItem;
