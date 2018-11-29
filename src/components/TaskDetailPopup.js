import React from 'react';
import './TaskDetailPopup.scss';

const TaskDetailPopup = props => (
  <ul className="TaskDetailPopup" data-visible={props.display.show} style={{
    left: props.display.pageX,
    top: props.display.pageY
  }}>
    <li><button>スター</button></li>
    <li><button>アーカイブ</button></li>
  </ul>
);

export default TaskDetailPopup;
