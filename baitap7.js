let a = parseInt(prompt("Nhap mot so nguyen bat ki"))
let array = []
function sumNumber(array, c) {
    let sum = 0
    for (const element of array) {
        if (array[element] == c) {
            sum += array[element]
        }
    }
    return sum
}
console.log(sumNumber(array, a))
