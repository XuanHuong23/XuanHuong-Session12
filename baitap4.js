let str = prompt("nhap mot chuoi")
let a = prompt("nhap 1 ki tu")

function countString(str, c) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == c) {
            count++
        }
    }
    return count

}

console.log(countString(str, a))