let array = []
let array2= new Array()


array =[3]
array2= new Array(3)

console.log(array)
console.log(array2)

array[1] = "alejandro"
array[2] = "alejandro"
array[3] = "alejandro"
console.log(array)


//operaciones
array.push(false)
console.log(array)

let x=array.pop()
console.log(x)

array.shift()
console.log(array)

array.unshift("asdad")

console.log(array.length)

array = []
array.length = 0;

console.log(array)
array.slice(1,2)


array.splice(1,3)
