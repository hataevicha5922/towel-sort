function getArr(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res = res.concat(arr[i]);
    }
    console.log(res.sort());
}

module.exports = function towelSort(matrix) {
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        res = res.concat(matrix[i]);
    }
    return res.sort(function (a, b) {
        return a - b;
    });
};
