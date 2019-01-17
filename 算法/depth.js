var obj1 = {
    child1: {
      child11: 3,
      child12: {
        child121: 33
      },
      child13: {
        child131: [
          {
            child1311: 343
          }
        ]
      }
    },
    child2: 1
} // 包含数组，深度 = 5

var obj2 = {
    dog: {
        head: 1,
        leg: 4,
        parents: {
            mother: 1,
            father: {
                dog: 2
            }
        }
    },
    cat: {
        head: {
            dog: 2
        }
    }
} //不包含数组，深度 = 4

function isObject(data) {
    return Object.prototype.toString.call(data) === '[object Object]'
}
function isArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]'
}
// 深拷贝
function deepClone(data) {
    var objClone
    if (isObject(data)) {
        objClone = {}
        for (var key in data) {
            objClone[key] = deepClone(data[key])
        }
    } else if(isArray(data)) {
        objClone = []
        data.forEach(item => {
            objClone.push(deepClone(item))
        })
    } else {
        objClone = data
    }

    return objClone
}
// 不考虑数组，默认data为对象
function deepCloneSimple(data) {
    var objClone = {}
    for (var key in data) {
        objClone[key] = isObject(data[key]) ? deepCloneSimple(data[key]) : data[key]
    }
    return objClone
}

// test
const obj2Clone = deepClone(obj2)
const obj1Clone = deepClone(obj1)
const obj2Clone2 = deepCloneSimple(obj2)

// console.log(obj2Clone)
// console.log(obj1Clone)
// console.log(obj2Clone2)

// console.log(obj1Clone.child1.child13.child131[0])

// console.log(obj2 == obj2Clone, 
//     obj2.dog == obj2Clone.dog, 
//     obj2.dog.parents.father == obj2Clone.dog.parents.father)

// console.log(obj1 == obj1Clone, 
//     obj1.child1 == obj1Clone.child1,
//     obj1.child1.child13.child131 == obj1Clone.child1.child13.child131, 
//     obj1.child1.child13.child131[0] == obj1Clone.child1.child13.child131[0])

// 获取对象的深度
function getDepth(data) {
    var depth = arguments[1] || 0
    if (typeof data !== 'object') return depth    
    var depthArr = []
    for (var key in data) {
        (function (depth){
            depthArr.push(getDepth(data[key], ++depth))
        })(depth)
    }
    return Math.max(...depthArr)
}

console.log(getDepth(obj1))

// 不考虑数组，默认data为对象
// function getDepthSimple(data) {
//     var depth = arguments[1] || 1
//     var depthArr = [];
//         for (var key in data) {
//             (function (depth) {
//                 depthArr.push( 
//                     isObject(data[key]) ?  getDepthSimple(data[key], ++depth) : depth)
//             })(depth)
//         }
    

//     return Math.max(...depthArr)
// }

// console.log(getDepthSimple(obj2))