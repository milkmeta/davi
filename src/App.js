import React from 'react';
import MicroContainer from 'react-micro-container';
import uuidv4 from 'uuid/v4';
import Main from './components/Main';

const localStorageName = 'davi';
const defaultState = {
  rootId: 'root',
  master: {
    root: {
      title: 'Root',
      starred: true,
      isRoot: true,
      children: [
        'task01',
        'task02',
        'task03',
        'task04'
      ]
    },
    task01: {
      title: 'Task 01',
      date: '2019-01-01',
      parent: 'root',
      children: [
        'task01_01',
        'task01_02'
      ]
    },
    task01_01: {
      title: 'Task 01_01',
      date: '2019-01-01',
      parent: 'task01'
    },
    task01_02: {
      title: 'Task 01_02',
      parent: 'task01'
    },
    task02: {
      title: 'Task 02',
      starred: true,
      parent: 'root',
      children: [
        'task02_01',
        'task02_02'
      ]
    },
    task02_01: {
      title: 'Task 02_01',
      starred: true,
      parent: 'task02'
    },
    task02_02: {
      title: 'Task 02_02',
      parent: 'task02'
    },
    task03: {
      title: 'Task 03',
      checked: true,
      parent: 'root',
      children: [
        'task03_01',
        'task03_02'
      ]
    },
    task03_01: {
      title: 'Task 03_01',
      checked: true,
      parent: 'task03'
    },
    task03_02: {
      title: 'Task 03_02',
      parent: 'task03'
    },
    task04: {
      title: 'Task 04',
      date: '2019-04-01',
      archived: true,
      parent: 'root',
      children: [
        'task04_01',
        'task04_02'
      ]
    },
    task04_01: {
      title: 'Task 04_01',
      archived: true,
      parent: 'task04'
    },
    task04_02: {
      title: 'Task 04_02',
      parent: 'task04'
    }
  },
  popup: {
    name: '',
    id: '',
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

  todoAddSibling(siblingId) {
    this.setState(state => {
      const id = state.master[siblingId].parent;
      const item = state.master[id];
      const uuid = uuidv4();
      state.master[uuid] = {
        title: '',
        parent: [id]
      };
      if (!item.children) {
        item.children = [];
      }
      item.children.push(uuid);
      return state;
    });
  }

  todoAddChild(id) {
    this.setState(state => {
      const item = state.master[id];
      const uuid = uuidv4();
      state.master[uuid] = {
        title: '',
        parent: [id]
      };
      if (!item.children) {
        item.children = [];
      }
      item.children.push(uuid);
      return state;
    });
  }

  todoDelete(id) {
    console.log(id);
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
      item.archived = !item.archived;
      return state;
    });
  }

  todoPopup(id, name, e) {
    e.persist();
    const offsetParent = e.target.offsetParent;
    this.setState(state => {
      const visibility = (state.popup.name === name && id === state.popup.id) ? !state.popup.show : true;
      state.popup = {
        name,
        id,
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
      <Main dispatch={this.dispatch} {...this.state} />
    );
  }
}

export default App;
