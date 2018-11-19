import { observable } from 'mobx';
import * as React from 'react';

import './App.css';

import logo from './logo.svg';

import Hello from './components/Hello'
import TimerView from './components/TimerView';


class AppState {
  // @ts-ignore
  @observable timer = 0;
  timerId: any;

  constructor() {
    this.timerId = setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }

  stopTimer() {
    clearInterval(this.timerId)
  }
}

const appState = new AppState()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name="TypeScript" enthusiasmLevel={10} />
        <TimerView appState={appState} />
      </div>
    );
  }
}

export default App;
