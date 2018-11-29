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
      starred: true,
    },
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
      todoLoadSample: this.todoLoadSample,
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

  todoLoadSample() {
    fetch('./sample.json')
      .then((response) => {
        return response.json();
      })
      .then((master) => {
        this.setState({master})
      });
  }

  todoAddSibling(eventId) {
    this.setState(state => {
      const eventItem = state.master[eventId]
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

  todoPopup(id, name, e) {
    e.persist();
    const offsetParent = e.target.offsetParent;
    this.setState(state => {
      const visibility = (state.popup.name === name && id === state.popup.itemId) ? !state.popup.show : true;
      state.popup = {
        name,
        itemId: id,
        show: visibility,
        pageX: e.pageX - offsetParent.offsetLeft,
        pageY: e.pageY - offsetParent.offsetTop
      }
      return state;
    });
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
