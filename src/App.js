import React from 'react';
import MicroContainer from 'react-micro-container';
import uuidv4 from 'uuid/v4';
import Home from './components/Home';

const localStorageName = 'davi';
const defaultState = {
  rootId: 'root',
  master: {
    root: {
      title: 'Root',
      isRoot: true,
      starred: true
    }
  },
  window: {
    width: null,
    height: null,
    scrollX: null,
    scrollY: null
  },
  popup: {
    name: null,
    id: null,
    show: null,
    pageX: null,
    pageY: null
  }
};
const lastState = JSON.parse(localStorage.getItem(localStorageName));

class App extends MicroContainer {
  constructor(props) {
    super(props);
    this.state = lastState || defaultState;
  }

  componentDidMount() {
    this.subscribe({
      todoLoadState: this.todoLoadState,
      todoAddSibling: this.todoAddSibling,
      todoAddChild: this.todoAddChild,
      todoDelete: this.todoDelete,
      todoChangeText: this.todoChangeText,
      todoChangeBoolean: this.todoChangeBoolean,
      todoPopup: this.todoPopup,
      windowResize: this.windowResize
    });
  }

  todoLoadState(name) {
    if (name === 'reset') {
      this.setState(defaultState);
    }
    if (name === 'sample') {
      fetch('./sample.json')
        .then(response => response.json())
        .then(jsonData => this.setState(jsonData));
    }
  }

  todoAddSibling(eventId) {
    const eventItem = this.state.master[eventId];
    if (eventItem.isRoot) {
      return;
    }
    const id = eventItem.parentId;
    this.todoAddChild(id);
  }

  todoAddChild(id) {
    this.setState(state => {
      const item = state.master[id];
      const uuid = uuidv4();
      state.master[uuid] = {
        title: '',
        parentId: [id]
      };
      if (!item.childrenIds) {
        item.childrenIds = [];
      }
      item.childrenIds.push(uuid);
      return state;
    });
  }

  todoDelete(id) {
    const message = `タスク "${this.state.master[id].title}" を消去してもよろしいですか？`;
    if (!window.confirm(message)) {
      return false;
    }
    this.setState(state => {
      const child = state.master[id];
      const item = state.master[child.parentId];
      item.childrenIds = item.childrenIds.filter(childItem => childItem !== id);
      child.parentId = null;
      return state;
    });
  }

  todoChangeText(id, type, value) {
    this.setState(state => {
      const item = state.master[id];
      item[type] = value;
      return state;
    });
  }

  todoChangeBoolean(id, type, value = null) {
    this.setState(state => {
      const changeItem = (id, type, value) => {
        const item = state.master[id];
        if (type === 'archive' && item.isRoot) {
          return;
        }
        item[type] = (value !== null) ? value : !item[type];
        if (type === 'checked' && item[type] && item.childrenIds) {
          item.childrenIds.forEach(id => changeItem(id, 'checked', true));
        }
        if (type === 'checked' && !item[type] && item.parentId) {
          changeItem(item.parentId, 'checked', false);
        }
      };
      changeItem(id, type, value);
      return state;
    });
  }

  todoPopup(id, name, e) {
    if (e) {
      e.persist();
    }
    this.setState(state => {
      const popup = {};
      if (id === false) {
        popup.show = false;
      } else {
        popup.id = id;
        popup.name = name;
        popup.show = (name === state.popup.name && id === state.popup.id) ? !state.popup.show : true;
        if (popup.show) {
          if (e.detail) {
            popup.pageX = e.pageX;
            popup.pageY = e.pageY;
          } else {
            const rect = e.target.getBoundingClientRect();
            const target = {
              x: rect.left + state.window.scrollX,
              y: rect.top + state.window.scrollY,
              w: rect.width,
              h: rect.height
            };
            popup.pageX = target.x + (target.w / 2);
            popup.pageY = target.y + (target.h / 2);
          }
        }
      }
      Object.assign(state.popup, popup);
      return state;
    });
  }

  windowResize(e) {
    const window = e.currentTarget;
    this.setState(state => {
      Object.assign(state, {
        window: {
          width: window.innerWidth,
          height: window.innerHeight,
          scrollX: window.scrollX,
          scrollY: window.scrollY
        },
        popup: {
          show: false
        }
      });
      return state;
    });
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    localStorage.setItem(localStorageName, JSON.stringify(nextState));
  }

  render() {
    return (
      <Home {...this.state} dispatch={this.dispatch} />
    );
  }
}

export default App;
