import React from 'react';
import './TaskSummaryPopup.scss';

const TaskSummaryPopup = props => (
  <ul className="TaskSummaryPopup" data-visible={props.display.name === 'todoSummaryPopup' && props.display.show} style={{
    left: props.display.pageX,
    top: props.display.pageY
  }}>
    <li><button>スター</button></li>
    <li><button>アーカイブ</button></li>
  </ul>
);

export default TaskSummaryPopup;
