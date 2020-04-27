# 在node中搭建TS开发环境

# 安装ts

默认情况下 ts会11做出下面几种假设

1. 假设当前的执行环境是dom
2. 如果代码中没有使用模块化语句，便认为该代码是全局执信的
3. 编译的目标代码是es3

有2种方式改变上面假设
1. 使用tsc命令的时候，加上选项参数
2. 使用ts配置1文件，更改编译选项

# TS配置文件
配置文件创建有2种方式
1. 直接自己创建一个tsconfig.json
2. 使用命令行tsc --init

使用了配置文件后，使用tsc编译时，不能更上1文件名，它会忽略文件名

@types/node

@types是一个ts官方的类型库，其中包含了很多对js代码类型的描述

Jquery：用js写的，没有类型检查
安装@types/jquery,为jquery库添加类型定义

# 使用第3方库简化流程
ts-node:将ts代码在内存中完成编译，同时完成运行  yarn global add ts-node


ts-node src/index.ts

nodemon:用它检测文件的变化  nodemon -e ts  --watch src --exec ts-node src/index.ts     -e ts 表示的是监控ts文件 
--watch src 表示监控src文件夹
把它写成脚本 直接 npm run dev


TS是一个可选的静态的类型系统

# 如何进行类型约束

变量，函数的参数，函数的返回值位置上加上 ：类型

ts在很多场景中可以完成类型推导
> 小技巧 如何区分数字字符串和数字，关键是看如何读
如果按照数字的方式朗读为数字，否则为字符串。

编译结果中没有类型约束

# 基本类型
- number :数字
- string :字符串
- boolean :布尔
- 数组 

// let nums:number[];//表式number类型的数组 
// let nums:Array<number>;//这个和上面是一样的

- object ：对象
- null和undefined

null和undefined是所有类型的子类型，它们可以赋值给其它类型 
通过设置 "strictNullChecks": true//表示更加严格的空类型检查从此以后null和undefined只能赋值给自身

# 其它常用类型

- 联合类型：多种类型任选其一  let name:string |undefined;//这个就是联合类型

类型保护：当对某个变量进行类型判断之后，在判断的语句块中便可以确定他的确切类型  typeof可以触发类型保护（只是简单的类型）
- void类型 ：通常用于约束函数返回值表示改函数没有任何返回
- never类型 ：通常用于约束函数的返回值，表示改函数永远不可能结束
- 字面量类型 ：使用一个值进行约束
- 元祖类型(Tuple) :一个固定长度的数组，并且数组每一项的类型确定
- any类型 :any类型可以绕过类型检测，因此,any类型的数据可以赋值给任意类型

# 类型别名

对已知的一些类型定义别名

```
type 类型名 = 
```


# 函数的相关约束

就是有一个函数但是根据不同的传入参数返回的也是不同的所以我们可以对函数进行约束 这个就是函数重载

函数重载就是 对函数的多种情况进行声明。

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
c?表示可传递参数或不可传  可选参数只能出现在末尾

# 扩展类型-枚举

类型别名，枚举，接口，类

枚举通常用于约束某一个变量的取值范围
字面量和联合类型也可以达到同样的目的

# 字面量类型的问题
- 在类行约束位置会产生重复代码，当然可以使用类型别名解决该问题
- 逻辑名称和真实的值产生混淆，会导致当修改真实值的时候，产生大量的修改。
- 字面量类型不会进入编译

# 枚举

如何定义一个枚举

```
enum  枚举名{
    枚举字段1 = 值1，
    枚举字段2 = 值2
}

枚举会出现在编译结果中
```

枚举的规则

- 枚举的字段值可以是字符串或数字
- 数字枚举的值会自动自增
- 被数字枚举约束的变量，可以直接赋值为数字
- 数字枚举的编译结果和字符串枚举的编译结果有差距  

最佳实践：

- 尽量不要在一个枚举中即出现字符串字段，又出翔数字字段
- 使用枚举时，尽量使用枚举字段的名称而不使用真实的值