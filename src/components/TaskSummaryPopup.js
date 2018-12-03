import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskSummaryPopup.scss';

class TaskSummaryPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      offsetParent: null
    };
    this.boxRef = React.createRef();
  }

  render() {
    const state = this.state;
    const props = this.props;

    const popupName = 'TaskSummaryPopup';
    const { name, itemId, show, pageX, pageY} = props.settings;
    const itemDefault = {
      isRoot: false
    };
    const itemRaw = props.master[itemId];
    const item = Object.assign({}, itemDefault, itemRaw);

    const visibility = (name === popupName && show);
    const style = {};
    if (visibility && state.offsetParent) {
      const rect = state.offsetParent.getBoundingClientRect();
      style.left = pageX - rect.left;
      style.top = pageY - rect.top;
      if ((pageX + state.width) > props.window.width) {
        style.left -= state.width;
      }
      if ((pageY + state.height) > props.window.height) {
        style.top -= state.height;
      }
    }

    return (
      <ul className="TaskSummaryPopup" data-visible={visibility} style={style} ref={this.boxRef}>
        <li>
          <button onClick={() => {
            props.dispatch('todoChangeStar', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={[(!item.starred ? 'fas' : 'far'), 'star']} />
            <span className="TaskSummaryPopup__text">{!item.starred ? 'スターをつける' : 'スターを外す'}</span>
          </button>
        </li>
        <li>
          <button disabled={item.isRoot} onClick={() => {
            props.dispatch('todoChangeArchive', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={['fas', 'archive']} />
            <span className="TaskSummaryPopup__text">{!item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
          </button>
        </li>
        <li>
          <button disabled={item.isRoot} onClick={() => {
            props.dispatch('todoDelete', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={['fas', 'trash-alt']} />
            <span className="TaskSummaryPopup__text">削除</span>
          </button>
        </li>
      </ul>
    );
  }

  componentDidMount() {
    const box = this.boxRef.current;
    const originalStyle = box.getAttribute('style');
    box.setAttribute('style', 'position: absolute; visibility: hidden; display: block;');
    this.setState({
      width: box.offsetWidth,
      height: box.offsetHeight,
      offsetParent: box.offsetParent
    });
    box.setAttribute('style', originalStyle);
  }
}

TaskSummaryPopup.defaultProps = {
  master: {},
  window: {},
  popup: {}
};

export default TaskSummaryPopup;
