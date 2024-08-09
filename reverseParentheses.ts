// function reverseParentheses(s: string): string {
//   const startIndex = s.lastIndexOf('(')
//   const finalIndex = s.indexOf(')')

//   const substring = s.slice(startIndex + 1, finalIndex)
//   console.log(substring)
//   const reversedSubstring = reverseString(substring)

//   const newString =
//     s.slice(0, startIndex) + reversedSubstring + s.slice(finalIndex + 1)

//   if (newString.includes('(')) reverseParentheses(newString)

//   return newString
// }

// function reverseString(str: string): string {
//   return str.split('').reverse().join('')
// }

export const reverseParentheses = (s: string): string => {
  const stack: string[] = []

  for (let char of s) {
    if (char === ')') {
      let temp: string[] = []

      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        temp.push(stack.pop()!)
      }

      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        stack.pop()
      }

      stack.push(...temp)
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}

export const day11 = () => {
  console.log('1 -', reverseParentheses('(abcd)'))
  console.log('2 -', reverseParentheses('(u(love)i)'))
  console.log('3 -', reverseParentheses('(ed(et(oc))el)'))
  console.log('4 -', reverseParentheses('ta()usw((((a))))'))
}
