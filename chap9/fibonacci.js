export function fibonacciIterator(n) {
  if (n < 1) return 0
  if (n <= 2) return 1

  let fibMin2 = 1
  let fibMin1 = 1
  let fibN = 2
  for (let i = 2; i < n; i++) {
    fibN = fibMin2 + fibMin1
    fibMin2 = fibMin1
    fibMin1 = fibN
  }
  return fibN
}

export function fibonacci(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

export function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n]
    return (memo[n] = fibonacci(n - 2) + fibonacci(n - 1))
  }
  return fibonacci(n)
}
