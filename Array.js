/*Необходимо изучить следующие методы работы с массивами:

slice
splice
map
for
forEach
filter
reduce
sort
some
every
Для каждого метода написать пример с его использованием
*/

let newArray = [1,2,3,4,5,6,7,8]
//1
let newArray_slice = newArray.slice(0,4) // Копирует 4 эллемента начиная с индекса 0 
//2
newArray.splice(0,4) // Вырезает 4 эллемента начиная с индекса 4 
//3
let newArry_map = newArray.map(x => x*2)  // Применяет функцию указанную в параметре для каждого эллемента массива 
//4
for (let i in newArray){
    console.log(newArray[i])
}
//5
newArray.forEach(x => x/2)
//6
let newArray_filter = newArray.filter(x => x%2 == 0)
//7
let newArray_reduce = newArray.reduce((sum,current) => {
    return sum + current 
})
//8
newArray.push(1,2,3)
console.log(newArray)
newArray.sort()
console.log(newArray)
//9
console.log(newArray.some(x => x>100))
//10
console.log(newArray.every(x => x>-1))