// 两个升序列表合并为一个升序列表
var a = [1, 14, 22, 56, 59]
var b = [3, 29, 49, 53, 56, 59, 60]
/**
 * @returns {Array} 
 * @param {Array} a 
 * @param {Array} b 
 */
function mergeList(a, b) {
    var arr = [], tag = 0

    for (var i=0, l=b.length; i<l; i++) {
        if (!a[tag]) return arr.concat(b.slice(i))

        if(a[tag]>b[i]) {
            arr.push(b[i])
        } else {
            arr.push(a[tag])
            tag++           
            i-- 
        } 
    }
    return arr.concat(a.slice(tag))
} 

console.log(mergeList(a, b))
// 输入一堆数组array和n，找出和值为sum的n个元素即可，不用找出所有组合
// eg.
// array = [2, 3, 1, 10, 4, 30] , n = 2 , sum = 31 
// result = find(array, n, sum) 
// result = [1, 30]

/**
 * @returns {Array}
 * @param {Array} arr
 * @param {Number} n 
 * @param {Number} sum 
 */
function find(arr, n, sum) {
    var result = []
    function group(arr, temp, n) {
        for(var i = temp; i < arr.length; i++) {
            group(arr, ++temp, n)
        }
        // if(temp == n - 1) {
        //     if(arr[i] == )
        // }
    }
    // for(var i = 0; i < arr.length; i++) {
    //     for(var j = i+1; j < arr.length; i++) {
    //         for(var k = j+1; k < arr.length; k++) {

    //         }            
    //     }
    // }
}