import React from 'react';
import MicroContainer from 'react-micro-container';
import uuidv4 from 'uuid/v4';
import Main from './components/Main';

class App extends MicroContainer {
  constructor(props) {
    super(props);
    this.state = {
      rootId: 'root',
      master: {
        root: {
          title: 'Root',
          children: [
            'task01',
            'task02',
            'task03'
          ]
        },
        task01: {
          title: 'Task 1',
          date: '2019-01-01',
          starred: true
        },
        task02: {
          title: 'Task 2',
          date: '2019-02-01',
          checked: true
        },
        task03: {
          title: 'Task 3',
          date: '2019-03-01'
        }
      }
    };
  }

  render() {
    return (
      <Main dispatch={this.dispatch} {...this.state} />
    );
  }
}

export default App;
