// 【防抖】希望频繁事件的回调函数在某段连续时间内，在事件触发后只执行一次。
// 参考https://github.com/lishengzxc/bblog/issues/7

// 简单
function debounce(fn, delay) {
    var timer
    return function() {
        clearTimeout(timer)
        var _this = this
        var args = arguments
        timer = setTimeout(function(){
            fn.apply(_this, args)
        }, delay)
    }
}