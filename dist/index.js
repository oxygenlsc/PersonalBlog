let say;
function add(a = 1, b = 1) {
    return a + b;
}
let num = add(1, 2); //在这里应为返回的函数是number类型所以这个变量也是number类型所以可以不用自己在这个变量上面写类型约束
// 这就是所谓的类型推导
num = 123;
let age; //这个变量下面有3个点表示任意类型ts不会对它做检查，这就是类型推导不出来的情况
let phone = '1123123123';
function isOdd(n) {
    if (n % 2 === 0) {
        return false;
    }
    return true;
}
console.log(num + 123);
// let nums:number[];//表式number类型的数组 
// let nums:Array<number>;//这个和上面是一样的
function printValues(obj) {
    const vals = Object.values(obj);
    vals.forEach((el) => {
        console.log(el);
    });
    console.log(vals);
}
printValues({ a: 1, b: 2 });
let name; //这个就是联合类型
// if(typeof name ==="string"){
// 类型保护
//     name.
// }
let a; //字面量约束，表示为这个值之后只能是赋值为A;
let tu;
function combine(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('传入类型不同');
}
const nums = combine('1', '2');
console.log(nums);
// 枚举
var Gender;
(function (Gender) {
    Gender["Male"] = "\u7537";
    Gender["female"] = "\u5973";
})(Gender || (Gender = {}));
let gender;
gender = Gender.Male;
console.log(gender);
