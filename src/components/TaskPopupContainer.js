import React, { Component } from 'react';
import './TaskPopupContainer.scss';

class TaskPopupContainer extends Component {
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

    const itemDefault = {
      isRoot: false
    };
    const itemRaw = props.master[settings.id];
    const item = Object.assign({}, itemDefault, itemRaw);

    const show = (settings.name === props.name && settings.show);
    const style = {};
    if (show && state.offsetParent) {
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
      <div className="TaskPopupContainer" data-visible={show} style={style} ref={this.boxRef}>
        {React.cloneElement(this.props.children, { item, id: settings.id })}
      </div>
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

TaskPopupContainer.defaultProps = {
  master: {},
  window: {},
  popup: {},
  name: ''
};

export default TaskPopupContainer;
