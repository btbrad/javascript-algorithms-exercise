export function factorialIterator(n) {
  if (n < 0) return undefined
  let total = 1
  for (let i = n; i > 1; i--) {
    total *= i
  }
  return total
}

export function factorial(n) {
  if (n === 1 || n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}
