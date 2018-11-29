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
  };
  const itemRaw = props.master[props.id];
  const item = Object.assign(itemDefault, itemRaw);

  if (item.archived) {
    return false;
  }
  return (
    <div className="TaskDetailItem" data-starred={item.starred} data-checked={item.checked}>
      <div className="TaskDetailItem__self">
        <input type="checkbox" className="TaskDetailItem__checkbox" checked={item.checked} onChange={() => props.dispatch('todoChangeStatus', props.id)} />
        <input type="text" className="TaskDetailItem__title" value={item.title} onChange={e => props.dispatch('todoChangeTitle', props.id, e.target.value)} />
        <input type="date" className="TaskDetailItem__date" value={item.date} onChange={e => props.dispatch('todoChangeDate', props.id, e.target.value)} />
        <button className="TaskDetailItem__button" onClick={e => props.dispatch('todoPopup', props.id, 'TaskDetailPopup', e)}><FontAwesomeIcon icon={['fas', 'ellipsis-h']} /></button>
      </div>
      <div className="TaskDetailItem__children">
        {item.childrenIds ? <TaskDetailList master={props.master} childrenIds={item.childrenIds} dispatch={props.dispatch} /> : null}
      </div>
    </div>
  );
};

TaskDetailItem.defaultProps = {
  master: {},
  id: ''
};

export default TaskDetailItem;
