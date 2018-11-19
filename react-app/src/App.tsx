import { observer } from 'mobx-react'
import * as React from 'react'

import './App.css';

import logo from './logo.svg';

import Hello from './components/Hello'
import TimerView from './components/TimerView';

@observer
class App extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default
      return <DevTools />
    }
    return null
  }

  render() {
    const { todo } = this.props.store
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name="TypeScript" enthusiasmLevel={10} />
        <p>Test Todo List: {todo.todos[0]}</p>
        <TimerView />
        {this.renderDevTool()}
      </div>
    );
  }
}

export default App;
