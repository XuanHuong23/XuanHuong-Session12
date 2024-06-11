let str1 = prompt("nhap mot chuoi bat ki")
let str2 = prompt("Nhap chuoi bat ki")
function checkString(str1, str2) {
    str1 = str1.includes(str2)
    return str1
}
console.log(checkString(str1, str2))

