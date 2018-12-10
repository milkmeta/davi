import React, { Component } from 'react';
import './TaskPopupContainer.scss';

class TaskPopupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      width: null,
      height: null,
      offsetParent: null
    };
    this.boxRef = React.createRef();
  }

  render() {
    const state = this.state;
    const props = this.props;
    const { window, popup } = props;

    const itemDefault = {
      isRoot: false
    };
    const itemRaw = props.master[popup.id];
    const item = Object.assign({}, itemDefault, itemRaw);

    const style = {};
    if (state.show && state.offsetParent && typeof popup.pageX !== 'undefined') {
      const rect = state.offsetParent.getBoundingClientRect();
      style.left = popup.pageX - (rect.left + window.scrollX);
      style.top = popup.pageY - (rect.top + window.scrollY);
      if ((popup.pageX + state.width) > window.clientWidth) {
        style.left -= state.width;
      }
      if ((popup.pageY + state.height) > window.clientHeight) {
        style.top -= state.height;
      }
    }

    return (
      <div className="TaskPopupContainer" data-visible={show} style={style} ref={this.boxRef}>
        {React.cloneElement(props.children, {
          id: popup.id,
          item
        })}
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

  componentWillReceiveProps() {
    const { props } = this;
    const { popup } = props;
    const show = (popup.name === props.children.type.name && popup.show);
    this.setState({ show });
  }

  componentDidUpdate() {
    const { state } = this;
    if (state.show) {
      const box = this.boxRef.current;
      const focusable = 'button:not(:disabled),[href]:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"]):not(:disabled)';
      box.querySelectorAll(focusable)[0].focus();
    }
  }
}

export default TaskPopupContainer;
