import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskDetailList from './TaskDetailList';
import './TaskDetailItem.scss';

const TaskDetailItem = props => {
  const itemDefault = {
    title: '',
    date: '',
    starred: false,
    checked: false,
    archived: false
  }
  const itemRaw = props.master[props.id];
  const item = Object.assign(itemDefault, itemRaw)
  const itemInfo = {
    id: props.id
  };

  if (item.archived) {
    return false;
  }
  return (
    <div className="TaskDetailItem" data-starred={item.starred} data-checked={item.checked}>
      <div className="TaskDetailItem__self">
        <input type="checkbox" className="TaskDetailItem__checkbox" checked={item.checked} onChange={() => props.dispatch('todoChangeStatus', itemInfo)} />
        <input type="text" className="TaskDetailItem__title" value={item.title} onChange={e => props.dispatch('todoChangeTitle', itemInfo, e.target.value)} />
        <input type="text" className="TaskDetailItem__date" value={item.date} onChange={e => props.dispatch('todoChangeDate', itemInfo, e.target.value)} />
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
