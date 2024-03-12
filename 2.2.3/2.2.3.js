function deepEqual (obj1, obj2) {
    if (typeof(obj1) !== 'object' && typeof(obj2) !== 'object') {
        return obj1===obj2 ? true : false;
    }

    if (obj1 === null && obj2 === null) {
        return true;
    } else if (obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
    return false;
    }

    for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
        areObjects && !(val1, val2) ||
        !areObjects && val1 !== val2
    ) {
        return false;
    }
    }

    return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}


const firstObject = {
    a: {
      b: {
            c: 1,
            d: 'string',
            e: {
            num: 1
            }
         }
    }
};

const secondObject = {
    a: {
      b: {
            e: {
            num: 1,
            },
            d: 'string',
            c: 1,
        }
    }
};
  
console.log(deepEqual(firstObject, secondObject)); // true
console.log(deepEqual({ a:1, b: 3 }, { b: 2, a: 1})); // false
console.log(deepEqual({ a:1, b: 3 }, { b: 2, a: 1, c: 6})); // false
console.log(deepEqual(1, 2)); //false
console.log(deepEqual(true, false)); //false
console.log(deepEqual(null, null)); //true
console.log(deepEqual(5, null)); //false

/*
Два объекта считаются равными, если у них все свойства одинаковы. 
В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму.*/

// function deepEqual (obj1, obj2) {
//     if (obj1 === null || obj2 === null) {
//         return false;
//     } else if (typeof(obj1) === 'object' && typeof(obj2) === 'object') {
        
//         let key1 = Object.keys(obj1);
//         let key2 = Object.keys(obj2);
//         let value1 = Object.values(obj1);
//         let value2 = Object.values(obj2); 

//         if (key1.length === key2.length) {
//             for (let i=0; i<value1.length; i++) {
//                 if (typeof(value1[i]) !=='object' && typeof(value2[i])!=='object' ||
//                     value1[i] === null && value2[i] === null
//                 ) {
//                     return value1[i] == value2[i] ? true : false;
//                 } else if (typeof(value1[i]) ==='object' && typeof(value2[i])==='object' ) {
//                     return deepEqual(value1[i], value2[i]);
//                 }
//             }
//         } else {
//             return false;
//         }

//     } else {
//         return obj1 === obj2 ? true : false;
//     }
// }