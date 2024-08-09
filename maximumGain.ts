// export const maximumGain = (s: string, x: number, y: number): number => {
//   let points = 0
//   const [maxOption, topScore] = x >= y ? ['ab', x] : ['ba', y]

//   let hasMaxOption = true
//   let last: string = s

//   while (hasMaxOption) {
//     const { rest, count } = removePair(last, maxOption)
//     console.log(s, rest, last)

//     points += count * topScore
//     last = rest
//     hasMaxOption = rest.includes(maxOption)
//   }

//   return points
// }

// const removePair = (s: string, maxOption: string) => {
//   let count = 0
//   for (let i = s.length - 1; i > 0; i = i - 2) {
//     if (s[i - 1] + s[i] === maxOption) {
//       count++
//       const rest = s.slice(0, i - 1) + s.slice(i + 1)
//       s = rest
//     }
//   }
//   return { rest: s, count }
// }

export const maximumGain = (s: string, x: number, y: number): number => {
  const stack: string[] = []
  let score = 0

  const [maxOption, topScore, minOption, botScore] =
    x >= y ? ['ab', x, 'ba', y] : ['ba', y, 'ab', x]

  for (let i = 0; i < 2; i++) {
    const opt = i ? minOption : maxOption
    const scoreOpt = i ? botScore : topScore
    for (let char of s) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === opt[0] &&
        char === opt[1]
      ) {
        console.log(stack + ',' + char)

        stack.pop()
        score += scoreOpt
      } else {
        stack.push(char)
      }
    }
  }

  return score
}

export const day12 = () => {
  const init = new Date().getTime()
  console.log(
    '1 -',
    maximumGain('cdbcbbaaabab', 4, 5),
    new Date().getTime() - init + 'ms'
  )
  // console.log('2 -')
  // console.log('3 -')
  // console.log('4 -')
}
