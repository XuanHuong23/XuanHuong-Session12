//input nhap 3 so bat ki
//input fn => input la mot so=>output => chan/le

let a = +prompt("nhap so a")
let b = +prompt("Nhap so b")
let c = +prompt("nhap so c")

function testNum(num) {
    if (num % 2 == 0) {
        console.log(num, "la so chan")
    } else {
        console.log(num, "la so le")
    }
    // return num

}
testNum(a)
testNum(b)
testNum(c)