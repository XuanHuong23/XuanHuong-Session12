// Viết chương trình khai báo mảng gồm nhiều chuỗi bất kỳ, 
// yêu cầu người dùng nhập vào 1 chuỗi bất kỳ. 
// Xây dựng hàm có 2 tham số là 1 mảng và 1 chuỗi, 
// kết quả trả về là tất cả các phần tử trong mảng có chứa chuỗi vừa nhập. 
// In kết quả trả về ra màn hình.
let arr = new Array()
let str = prompt("nhap mot chuoi")
function checkString(array, str) {
    for (let i = 0; i < array.length; i++) {
        array = array.push(str)
    }
    return array
}
console.log(checkString(arr, str))