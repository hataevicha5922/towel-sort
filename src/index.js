// function getArr(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res = res.concat(arr[i]);
//     }
//     console.log(res.sort());
// }

module.exports = function towelSort(matrix) {
    let res = [];
    if (arguments.length === 0) {
        res = [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                res = res.concat(matrix[i]);
            } else {
                res = res.concat(matrix[i].reverse());
            }
        }
    }
    return res;
};
