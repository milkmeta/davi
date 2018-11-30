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
  popup: {
    name: '',
    itemId: '',
    show: false,
    mouseX: 0,
    mouseY: 0
  }
};
const lastState =  JSON.parse(localStorage.getItem(localStorageName));

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
      todoChangeTitle: this.todoChangeTitle,
      todoChangeDate: this.todoChangeDate,
      todoChangeStatus: this.todoChangeStatus,
      todoChangeStar: this.todoChangeStar,
      todoChangeArchive: this.todoChangeArchive,
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
    this.setState(state => {
      const eventItem = state.master[eventId];
      if (eventItem.isRoot) {
        return;
      }
      const id = eventItem.parentId;
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

  todoChangeTitle(id, value) {
    this.setState(state => {
      const item = state.master[id];
      item.title = value;
      return state;
    });
  }

  todoChangeDate(id, value) {
    this.setState(state => {
      const item = state.master[id];
      item.date = value;
      return state;
    });
  }

  todoChangeStar(id) {
    this.setState(state => {
      const item = state.master[id];
      item.starred = !item.starred;
      return state;
    });
  }

  todoChangeStatus(id) {
    this.setState(state => {
      const item = state.master[id];
      item.checked = !item.checked;
      return state;
    });
  }

  todoChangeArchive(id) {
    this.setState(state => {
      const item = state.master[id];
      if (item.isRoot) {
        return;
      }
      item.archived = !item.archived;
      return state;
    });
  }

  todoPopup(name, id, e) {
    this.setState(state => {
      Object.assign(state.popup, {
        show: (name === state.popup.name && id === state.popup.itemId) ? !state.popup.show : true,
        name: name,
        itemId: id || ''
      });
      return state;
    });
    if (e) {
      e.persist();
      const offsetParent = e.target.offsetParent;
      const position = {};
      if (e.detail) {
        position.pageX = e.pageX - offsetParent.offsetLeft;
        position.pageY = e.pageY - offsetParent.offsetTop;
      } else {
        position.pageX = e.target.offsetLeft + (e.target.offsetWidth / 2);
        position.pageY = e.target.offsetTop + (e.target.offsetHeight / 2);
      }
      this.setState(state => {
        Object.assign(state.popup, position);
        return state;
      });
    }
  }

  windowResize() {
    this.setState(state => {
      state.popup.show = false;
      return state;
    });
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    localStorage.setItem(localStorageName, JSON.stringify(nextState));
  }

  render() {
    return (
      <Home dispatch={this.dispatch} {...this.state} />
    );
  }
}

export default App;
