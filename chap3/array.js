let daysOfWeek = new Array()
console.log(daysOfWeek.length)
daysOfWeek = new Array(7)
console.log(daysOfWeek.length)
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
daysOfWeek.length = 10
console.log(daysOfWeek)

for (let i =0; i< daysOfWeek.length; i++) {
  console.log(daysOfWeek[i])
}