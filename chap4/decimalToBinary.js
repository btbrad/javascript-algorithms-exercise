const Stack = require('./Stack')


/**
 * 要把十进制转化成二进制，我们可以将该十进制数除以 2（二进制是满二进一）并对商取整，直到结果是 0 为止。
 * @param {*} decNumber 
 */
function decimalToBinary(decNumber, base = 10) {

  if (base < 2 || base > 36) {
    console.log('进制必须在2~36之间')
    return
  }

  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const stack = new Stack()
  
  while (decNumber > 0) {
    stack.push(Math.floor(decNumber % base))
    decNumber = Math.floor(decNumber / base)
  }

  let binaryString = ''

  while(!stack.isEmpty()) {
    binaryString += digits[stack.pop()]
  }

  return binaryString
}

module.exports = decimalToBinary