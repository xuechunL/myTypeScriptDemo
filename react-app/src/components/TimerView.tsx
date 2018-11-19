import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';

@observer 
// @ts-ignore
class TimerView extends React.Component<{appState: AppState}, {}> {
  onReset = () => {
    this.props.appState.resetTimer()
  }

  onStop = () => {
    this.props.appState.stopTimer()
  }

  render() {
    return (
      <div>
        <h2>This is a Time Viewer component for simple usage of @observer in mobx-react</h2>
        <button onClick={this.onReset} style={{cursor: 'pointer', marginRight: '1em'}}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <button onClick={this.onStop} style={{cursor: 'pointer'}}>
          Stop timer
        </button>
        <DevTools />
      </div>
    )
  }
}

export default TimerView
