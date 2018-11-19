// import { observer } from 'mobx-react'
import * as React from 'react';

interface ITimerState {
  count: number
  id: any
}

// @observer 
class TimerView extends React.Component<{}, ITimerState> {
  state = {
    count: 0,
    id: 0
  }

  componentDidMount() {
    this.startTimer()
  }

  startTimer () {
    let count = this.state.count
    const id = setInterval(() => {
      count += 1
      this.setState({ count })
    }, 1000)
    this.setState({ id })
  }

  onReset = () =>  this.setState({ count: 0 })

  onStop = () => {
    const id = clearInterval(this.state.id)
    this.setState({ id })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>This is a Time Viewer component for simple usage of @observer in mobx-react</h2>
        <button onClick={this.onReset} style={{cursor: 'pointer', marginRight: '1em'}}>
          Seconds passed: {count}
        </button>
        <button onClick={this.onStop} style={{cursor: 'pointer'}}>
          Stop timer
        </button>
      </div>
    )
  }
}

export default TimerView
