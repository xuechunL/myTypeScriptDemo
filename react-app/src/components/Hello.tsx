import * as React from 'react'

export interface IProps {
  name: string
  enthusiasmLevel?: number
}

class Hello extends React.Component<IProps, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }

    return (
      <div className="hello">
        <h1 className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </h1>
      </div>
    )
  }
}

export default Hello

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}