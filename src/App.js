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
          starred: true,
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
          children: [
            'task01_01',
            'task01_02'
          ]
        },
        task01_01: {
          title: 'Task 01_01',
          date: '2019-01-01'
        },
        task01_02: {
          title: 'Task 01_02',
          children: [
            'task02_01',
            'task02_02'
          ]
        },
        task02: {
          title: 'Task 02',
          starred: true
        },
        task02_01: {
          title: 'Task 02_01',
          starred: true
        },
        task02_02: {
          title: 'Task 02_02'
        },
        task03: {
          title: 'Task 03',
          checked: true,
          children: [
            'task03_01',
            'task03_02'
          ]
        },
        task03_01: {
          title: 'Task 03_01',
          checked: true
        },
        task03_02: {
          title: 'Task 03_02'
        },
        task04: {
          title: 'Task 04',
          date: '2019-04-01',
          archived: true,
          children: [
            'task04_01',
            'task04_02'
          ]
        },
        task04_01: {
          title: 'Task 04_01',
          archived: true
        },
        task04_02: {
          title: 'Task 04_02'
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
