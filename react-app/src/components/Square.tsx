interface ISquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: ISquareConfig): {color: string; area: number} {
  const newSquare = {color: "white", area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

// let mySquare = createSquare({color: "black"});
let squareOptions = { colour: "red", width: 100 }
let mySquare = createSquare(squareOptions)
