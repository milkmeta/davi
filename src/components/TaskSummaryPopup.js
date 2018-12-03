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
    const { window, settings } = props;

    const popupName = 'TaskSummaryPopup';

    const itemDefault = {
      isRoot: false
    };
    const itemRaw = props.master[settings.itemId];
    const item = Object.assign({}, itemDefault, itemRaw);

    const visibility = (settings.name === popupName && settings.show);
    const style = {};
    if (visibility && state.offsetParent) {
      const rect = state.offsetParent.getBoundingClientRect();
      style.left = settings.pageX - (rect.left + window.scrollX);
      style.top = settings.pageY - (rect.top + window.scrollY);
      if ((settings.pageX + state.width) > window.width) {
        style.left -= state.width;
      }
      if ((settings.pageY + state.height) > window.height) {
        style.top -= state.height;
      }
    }

    return (
      <ul className="TaskSummaryPopup" data-visible={visibility} style={style} ref={this.boxRef}>
        <li>
          <button onClick={() => {
            props.dispatch('todoChangeStar', settings.itemId);
            props.dispatch('todoPopup', popupName, settings.itemId);
          }}>
            <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={[(!item.starred ? 'fas' : 'far'), 'star']} />
            <span className="TaskSummaryPopup__text">{!item.starred ? 'スターをつける' : 'スターを外す'}</span>
          </button>
        </li>
        <li>
          <button disabled={item.isRoot} onClick={() => {
            props.dispatch('todoChangeArchive', settings.itemId);
            props.dispatch('todoPopup', popupName, settings.itemId);
          }}>
            <FontAwesomeIcon className="TaskSummaryPopup__icon" icon={['fas', 'archive']} />
            <span className="TaskSummaryPopup__text">{!item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
          </button>
        </li>
        <li>
          <button disabled={item.isRoot} onClick={() => {
            props.dispatch('todoDelete', settings.itemId);
            props.dispatch('todoPopup', popupName, settings.itemId);
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
