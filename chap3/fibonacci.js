/**
 * 递归实现
 * @param {*} i 
 */
function fibonacci(i) {
  if (i === 0 || i === 1) {
    return 1
  }
  return fibonacci(i-1) + fibonacci(i-2)
}

let res = fibonacci(19)
console.log(res)

/**
 * 简单方法实现
 */
let f = []
f[0] = 1
f[1] = 1
for(let i =2; i< 20; i++){
  f[i] = f[i-1]+f[i-2]
}
for(let i=0; i < f.length;i++) {
  console.log(f[i])
}
