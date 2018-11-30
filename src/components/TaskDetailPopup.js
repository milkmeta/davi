import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskDetailPopup.scss';

class TaskDetailPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null
    }
    this.boxRef = React.createRef();
  }

  render() {
    const props = this.props;
    const popupName = 'TaskDetailPopup';
    const { name, itemId, show, pageX, pageY, windowW, windowH} = props.display;
    const itemDefault = {
      isRoot: false
    };
    const itemRaw = props.master[itemId];
    const item = Object.assign({}, itemDefault, itemRaw);

    const styleAttr = {
      left: pageX,
      top: pageY
    };

    return (
      <ul className="TaskDetailPopup" data-visible={name === popupName && show} style={styleAttr} ref={this.boxRef}>
        <li>
          <button disabled={item.isRoot} onClick={e => {
            props.dispatch('todoAddSibling', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'plus']} />
            <span className="TaskDetailPopup__text">タスクを追加</span>
          </button>
        </li>
        <li>
          <button onClick={e => {
            props.dispatch('todoAddChild', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'level-down-alt']} />
            <span className="TaskDetailPopup__text">サブタスクを追加</span>
          </button>
        </li>
        <li>
          <button onClick={e => {
            props.dispatch('todoChangeStar', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskDetailPopup__icon" icon={[(!item.starred ? 'fas' : 'far'), 'star']} />
            <span className="TaskDetailPopup__text">{!item.starred ? 'スターをつける' : 'スターを外す'}</span>
        </button>
        </li>
        <li>
          <button disabled={item.isRoot} onClick={e => {
            props.dispatch('todoChangeArchive', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'archive']} />
            <span className="TaskDetailPopup__text">{!item.archived ? 'アーカイブ' : 'アンアーカイブ'}</span>
          </button>
        </li>
        <li>
          <button disabled={item.isRoot} onClick={e => {
            props.dispatch('todoDelete', itemId);
            props.dispatch('todoPopup', popupName, itemId);
          }}>
            <FontAwesomeIcon className="TaskDetailPopup__icon" icon={['fas', 'trash-alt']} />
            <span className="TaskDetailPopup__text">削除</span>
          </button>
        </li>
      </ul>
    );
  }

  componentDidMount() {
    const box = this.boxRef.current;
    const originalStyleAttr = box.getAttribute('style');
    box.setAttribute('style', 'position: absolute; visibility: hidden; display: block;');
    this.setState({
      width: box.offsetWidth,
      height: box.offsetHeight
    });
    box.setAttribute('style', originalStyleAttr);
  }
}

TaskDetailPopup.defaultProps = {
  master: {},
  display: {}
};

export default TaskDetailPopup;
