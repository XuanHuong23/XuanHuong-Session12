// Viết chương trình khai báo chuỗi bất kỳ,
// xây dựng hàm có tham số là 1 chuỗi
// và kết quả trả về là chuỗi được truyền vào nhưng viết hoa tất cả các chữ cái đầu.
// Gọi hàm với chuỗi đã được khai báo và in kết quả ra màn hình.
//input khai bao chuoi
//fn 1 chuoi, 
//output chuoi nhung viet hoa
//in ket qua voi chuoi dc khai bao

let array = "Chao tat ca moi nguoi"

function outStr(str) {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        console.log("arr", arr[i])
        arr[i] = arr[i].chatAt(0).toUpperCase() + arr[i].slice(1)

    }
    return arr.join()

}
let chuoiViethoa = outStr(array)
console.log(chuoiViethoa)