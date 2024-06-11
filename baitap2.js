// input: la 1 array chua cac chu 
// fn=> input la 1 string array => return=> string cos length dai nhat

let array = ["a", "bdc", "nguyen van a", "hello", "123"]

function checkStr(strArray) {
    let max = strArray[0]
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > max.length) {
            max = strArray[i]
        }
    }
    return max
}

console.log("length dai nhat : ", checkStr(array))