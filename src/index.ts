let say:string 
function add(a:number=1,b:number=1):number{//表示返回值也是number
        return a+b;
}
let num = add(1,2);//在这里应为返回的函数是number类型所以这个变量也是number类型所以可以不用自己在这个变量上面写类型约束
// 这就是所谓的类型推导
num = 123;
let age //这个变量下面有3个点表示任意类型ts不会对它做检查，这就是类型推导不出来的情况
let phone = '1123123123'
function isOdd(n:number):boolean{
    if(n%2===0){
        return false
    }
    return true
}
console.log(num+123)

// let nums:number[];//表式number类型的数组 
// let nums:Array<number>;//这个和上面是一样的


function printValues(obj:object){
    const vals = Object.values(obj);
    vals.forEach((el)=>{
        console.log(el)
    })
    console.log(vals);
}

printValues({a:1,b:2})
let name:string |undefined;//这个就是联合类型

// if(typeof name ==="string"){
    // 类型保护
//     name.
// }

let a:'A';//字面量约束，表示为这个值之后只能是赋值为A;

let tu:[string,number]

type user = {
    name:string
} //就给这个字面量类型起名为user

function combine(a:string,b:string):string;
function combine(a:number,b:number):number;
function combine(a:number|string,b:number|string,c?:number):number|string{
    if(typeof a ==='number'&& typeof b ==='number'){
        return a+b;
    }
    if(typeof a ==='string'&& typeof b ==='string'){
        return a+b;
    }
    throw new Error('传入类型不同')
}
const nums = combine('1','2')
console.log(nums)

// 枚举
enum Gender {
    Male='男',
    female='女'
}
let gender:Gender
gender = Gender.Male

console.log(gender)