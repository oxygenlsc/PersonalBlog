let say;
function add(a = 1, b = 1) {
    return a + b;
}
let num = add(1, 2); //在这里应为返回的函数是number类型所以这个变量也是number类型所以可以不用自己在这个变量上面写类型约束
// 这就是所谓的类型推导
num = 123;
let age; //这个变量下面有3个点表示任意类型ts不会对它做检查，这就是类型推导不出来的情况
let phone = '1123123123';
console.log(num + 123);
