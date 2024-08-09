export const numMagicSquaresInside = (grid: number[][]): number => {
  const rows = grid.length
  const cols = grid[0].length
  let qntMagicSquares = 0

  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      const subGrid = getSubSquare(grid, i, j)

      const isMagic = isMagicSquare(subGrid)
      if (isMagic) qntMagicSquares++
    }
  }

  return qntMagicSquares
}

const isMagicSquare = (grid: number[][]): boolean => {
  const flat = grid.flat()
  if (
    flat.every(num => num === flat[0] || flat.some(num => num > 9 || num < 1))
  )
    return false

  const size = grid.length
  const magicNumbers: number[] = []
  let sumDiagonal1 = 0
  let sumDiagonal2 = 0

  for (let i = 0; i < size; i++) {
    const magicNumberRow = grid[i].reduce((a, b) => a + b, 0)
    magicNumbers.push(magicNumberRow)

    sumDiagonal1 += grid[i][i]
    sumDiagonal2 += grid[2 - i][i]
  }
  magicNumbers.push(sumDiagonal1, sumDiagonal2)

  for (let i = 0; i < size; i++) {
    let sum = 0
    for (let j = 0; j < size; j++) {
      sum += grid[j][i]

      if (j === size - 1) {
        magicNumbers.push(sum)
        sum = 0
      }
    }
  }

  const magicNumber = magicNumbers[0]

  return magicNumbers.every(num => num === magicNumber)
}

const getSubSquare = (
  grid: number[][],
  startRow: number,
  startCol: number
): number[][] => {
  const subSquare: number[][] = []

  for (let i = startRow; i < startRow + 3; i++) {
    subSquare.push(grid[i].slice(startCol, startCol + 3))
  }
  return subSquare
}

export const day13 = () => {
  // console.log(
  //   '1 -',
  //   numMagicSquaresInside([
  //     [4, 3, 8, 4],
  //     [9, 5, 1, 9],
  //     [2, 7, 6, 2]
  //   ])
  // )
  // console.log('2 -', numMagicSquaresInside([[8]]))
  // console.log(
  //   '3 -',
  //   numMagicSquaresInside([
  //     [2, 7, 6],
  //     [1, 5, 9],
  //     [4, 3, 8]
  //   ])
  // )
  console.log(
    '4 -',
    numMagicSquaresInside([
      [10, 3, 5],
      [1, 6, 11],
      [7, 9, 2]
    ])
  )
  // console.log(
  //   isMagicSquare([
  //     [4, 3, 8],
  //     [9, 5, 1],
  //     [2, 7, 6]
  //   ])
  // )
  // console.log(
  //   isMagicSquare([
  //     [3, 8, 4],
  //     [5, 1, 9],
  //     [7, 6, 2]
  //   ])
  // )
  // console.log(
  //   getSubSquare(
  //     [
  //       [4, 3, 8, 4],
  //       [9, 5, 1, 9],
  //       [2, 7, 6, 2]
  //     ],
  //     0,
  //     1
  //   )
  // )
}
