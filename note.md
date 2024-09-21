###  常用的浏览器
- webket内核（V8引擎）
    + 谷歌Chrome
    + Safari
    + Opera >=V14
    + 国产浏览器
    + 手机浏览器
    + ...
- Gecko
    + 火狐Firefox
- Presto
    + Opera <V14
- Trident
    +IE
    +IE EDGE 开始采用双内核（其中包括chrome迷你）

谷歌浏览器的控制器（F12/Fn+F12）
- Elements: 查看结构样式，可以修改这些内容
- Console: 查看输出结果和报错信息，是JS调试的利器
- Sources: 查看项目源码
- Network: 查看当前网站所有资源的请求信息（包括服务器传输的HTTP报文信息）、加载时间等（根据加载时间进行项目优化）
- Application: 查看当前网站的数据存储和资源文件（可以盗图）

### JS做客户端语言
> 按照相关的JS语法，去操作页面中的元素，有时需要进行一些人机交互功能，操作浏览器功能
- ECMAScript3/5/6...: JS的语法规范(变量、数据类型，操作语句等等)
- DOM（document object model）: 文档对象模型，提供一些JS的属性和方法，用来操作页面中的DOM元素
- BOM（brower object model）: 浏览器对象模型，提供一些JS的属性和方法，用来操作浏览器的

### JS中的变量 variable
> 变量: 可变的量，用来存储和代表不同值

```
    //ES3
    var a = 12;
    a = 13;
    console.log(a); // =>输出的是a代表的值13

    //ES6
    let b = 100;
    b = 200;

    const c=1000;
    c = 2000;//=>报错： CONST创建的变量，存储的值不能被修改（可以理解为常量）

    //创建函数也相当于在创建变量
    function fn(){}
    //创建类也相当于创建变量
    class A{}
    //ES6的模块导入也可以创建变量
    import B from './B.js';
    //Symbol创建唯一值
    let n=Symbol(100);

```

### JS中的命名规范
- 严格区分大小写
```
let Test=100;
console.log(test); //无法输出
```
- 使用数字、字母、下划线、$，数字不能作为开头
```
let $box; //=>一般用JQ获取的以$开头
let _box; //=>一般公共变量都是以_开头
```
-使用驼峰命名法: 首字母小写，其余没有个有意义单词的首字母都要大写（命名尽可能语义化明显，使用英文单词）
```
let studentInformation;
let studentInfo;
//常用缩写: add/insert/create/new(新增)、update(修改)，delete/del/remove/rm(删除)，sel/select/query/get(查询)，info(信息)...
```
-不能使用关键字和保留字
```
当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字
var let const function ...
//=> 代码强迫症，极客精神
```

### JS中常用的数据类型
- 基本数据类型
    + 数字number
        常规数字和NaN
    + 字符串string
        所有用单引号，双引号，反引号（撇）包起来的都是字符串
    + 布尔boolean
        true/false
    + 空对象指针null
    + 未定义undefined
- 引用数据类型
    + 对象数据类型object
        + {} 普通对象
        + [] 数组对象
        + /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/ 正则对象（学完回来看是否能看懂）
        + Math数学函数对象
        + 日期对象
        + ...
    + 函数数据类型function

### number数据类型
> 包含: 常规数字、NaN

### NaN
> not a number: 不是一个数，但它属于数字类型

NaN和任何值（包括自己）都不相等，不能用相等的方式来判断是否为有效数字

### isNaN
> 检测一个值是否为非有效数字，如果不是有效数字返回TRUE，反之返回FALSE

在使用isNaN进行检测的时候，首先会验证检测的值是否为数字类型，如果不是,先基于Number()这个方法，把值转换为数字类型，然后进行检测

### 把其他类型值转换为数字类型
- Number（[val]）它是按照浏览器从底层机制，把其它数据类型转换为数字
+ 字符串:看是否包含非有效数字字符,包含结果就是NaN;''->0
+ 布尔:true->1 false->0
+ null:->0
+ undefined:->NaN
+ 引用类型值都要先转换为字符串再转换为数字
    + {}/正则/函数等 ->NaN
    + [] ->'' ->0
    + ['12']->'12'->12
    + [12,23]->'12,23'->NaN

- parseInt/parseFloat([val],[进制]):也是转换为数字的方法，对于字符串来说，它是从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找(不管后面是否还有数字，都不再找了)，把找到的当作数字返回
- ==进行比较的时候，可能出现把其它类型值转换为数字


## string字符串数据类型

### 其他类型转化为字符串类型
- [val].toString
    + null和undefined是禁止直接toString的
    + (null).toString()=>报错
    + 但是和undefined一样转换为字符串的结果就是'null'/'undefined'
    + 普通对象.toString()的结果是"object object"
- 字符串拼接
    ```
    let a = 10 + null + true + [] + undefined + '你好' + null + [] + 10 + false;
    console.log(a);
    // 输出结果为：'11undefined你好null10false'
    ```

## boolean布尔数据类型
> 只有两个值true/false

### 其它类型值转换为布尔类型
> 只有0，NaN，''，null,undefined 这五个值转换为false，其余都为true(没有任何特殊情况)

- Boolean([val])
- !/!!
    + !: 先转换为boolean类型，再进行取反
    + !!: 相当于转化为boolean类型
- 条件判断
    + 如果只是一个值，不是判断符进行比较，要先把这个值转换为布尔类型，然后再验证真假
    ```
    if(1){
        console.log('haha');
    }
    
    if('3px'+3){
        console.log('haha');
    }
    
    if('3px'-3){
        console.log('haha');
    } // 不输出
    
    ```

## null / undefined
> null和undefined都代表没有

- null: 意料之中(一般都是开始不知道值，我们手动设置为null，后期再给予赋值操作)
```
let num=null; //一般最好用null作为初始的空值，因为0不是空值，它在栈内存中有自己的存储空间（占了位置）
...
num=123;
```

-undefined: 意料之外(不是我能决定的)
```
let num;//=>创建一个变量没有赋值，默认值是undefined
```

## object对象数据类型-普通对象
> {[key]:[value],...} 任何一个对象都是由零到多组键值对(属性名：属性值)组成的(并且属性名不能重复)

+ 获取属性名对应的属性值
    ```
    console.log(person.name); //=>对象.属性名 如果属性名为数字，不能用该方式获取属性值
    console.log(person.1); => SyntaxError：语法错误
    console.log(person['name']); //=>对象[属性名] 属性名是数字或者字符串格式
    ```
+ 设置属性名属性值
    ```
    person.name=dog;
    person['name']=dog;//两种方式都可以，属性名不能重复，如果属性名已经存在，不属于新增而属于修改属性值
    ```
+ 删除属性
    ```
    person.name=null;//=>假删除：属性还在，值为空
    delete person['name']; // =>真删除：彻底删除
    ```
> 数组是特殊的对象数据类型
+ 中括号中设置的是属性值，它的属性名是默认生成的数字，从零开始递增，而且这个数字代表每一项的位置，我们把它称为“索引”=>从零开始，连续递增，代表每一项位置的数字属性名
+ 天生默认一个属性名length，存储数组的长度

## 堆栈底层机制
```
let a={
    n:1
};
let b=a;
a.x=a={
    n:2
};
console.log(a.x);
console.log(b);  // 画图重新做
```
### JS中的数据类型检测
- typeof[val]: 用来检测数据类型的运算符
    + 基于typeof检测出来的结果
        + 1.首先是一个字符串
        + 2.字符串中包含对应的类型
    + 局限性
        + 1.typeof null => "object" 但是null并不是对象，是空对象指针
        + 2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都为"object"

- instanceof ：用来检测当前实例是否属于某个类

- constructor: 基于构造函数检测数据类型(也是基于类的方式)

- Object.prototype.toString.call():检测数据类型最好的方法

### JS中的操作语句：判断，循环

#### 判断
> 条件成立？/条件不成立？
- if/else if /else
- 三元运算符
    > 条件？条件成立处理的事情:不成立处理的事情;  =>简单IF/ELSE的特殊处理
    + 1.如果处理的事情比较多，我们用括号包起来，每一件事情用逗号分隔
    + 2.如果不需要处理事情，可以使用null/undefined占位

- switch case
    + 1.不加break，当前条件成立执行完成后，后面条件不论是否成立都要执行，直到遇到break为止
    + 2.不加break可以实现变量在某些值的情况下做相同的事情
    + 3.每一种case情况的比较用的都是===“绝对相等”
### ==和===的区别
==：相等(如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较)
'5'==5 => TRUE

===:绝对相等(如果类型不一样，肯定不相等，不会默认转换数据类型)
'5'===5 => FALSE

项目中为了保证业务的严谨，推荐使用===

#### 循环
> 重复做某些事情就是循环
- for循环

- for in循环: 用来循环遍历对象中的键值对的（continue,break同样适用）

+ for(var 变量(key) in 对象) console.log('属性名：'+key+'属性值：'+ 对象[key]);
+ 优先循环数字属性名


- for of循环(ES6新增)


- while循环

- do while循环

#### 元素对象深入了解
```
let box =document.getElementById('box');
//  =>通过方法获取的元素是对象数据类型值
console.log(typeof box); //=>"object"

// => 基于.dir可以看到一个对象的详细信息
/*id: 操作元素的ID值
 *className：操作元素的CLASS样式类值
 *innerHTML: 操作的元素的内容(可以识别标签)
 *innerText：和innerHTML的区别是不能识别标签
 *tagName：获取元素的标签名(一般大写)
 *...
 *style:操作元素的行内样式 属性值是一个新的对象(CSSStyleDeclaration)
 */
console.dir(box);
```

### 函数 function
> 函数就是一个方法或者一个功能体，函数就是把实现某个功能的代码放到一起进行分装，以后想要操作实现这个功能，只需要把函数执行即可 =>"封装": 减少页面中的冗余代码，提高代码重复使用率(低耦合高内聚)

洗衣机就是一个函数，生产洗衣机就是封装一个函数(把实现某些功能的代码封装进来)，生产的时候，不知道用户洗衣服的时候放什么水，衣服，洗衣液，我们需要提供出入口（提供的入口在函数中叫做形参，执行的时候放的具体的东西函数中叫做实参），洗完衣服需要能拿出来，洗衣机提供一个出口（在函数中叫做返回值：把函数处理后的结果能够返回给外面用）
- 创建函数
    + 形参
    + 返回值

- 执行函数
    + 实参

- arguments函数内置的实参集合
    + 任意数求和(执行函数的时候，传递N个值实现求和)
    + 类数组集合，集合中存储着所有函数执行时，传递的实参信息
    + 不论是否设置形参，arguments都存在
    + 不论是否传递实参，arguments也都存在
```
function(){
    let  total= null;
    for(let i=0;i<arguments.length;i++){
        let item=Number(arguments[i]);
        if(item==NaN){
            continue;
        }
        total+=item;
    }
    return total;
}
```
- 函数底层运行机制
- ...

#### 创建函数
```
// =>ES5老方式
function [函数名]([形参变量1]，...){
    // 函数体：基于JS完成需要实现的功能
    return [处理后的结果]
}
[函数名]([实参1],...);
```
> 形参的细节
+ 创建函数的时候我们设置了形参变量，但如果执行的时候并没有给传递对应的实参值，那么形参变量默认的值是：undefined
+ 形参默认值处理：如果没有传递形参值，给予一个默认值
```
if (typeof m==='undefined'){
    m=0; 
}
```
> 函数中的返回值
+ return的一定是值
+ 没有写return，函数默认返回值是undefined
  
#### 匿名函数
+ 匿名函数之函数表达式：把一个匿名函数本身作为值赋值给其它东西，这种函数一般不是手动触发执行，而且靠其它程序驱动触发执行（例如：触发某个事件的时候把它执行等）
```
document.body.onclick = function(){}
setTimeout(function(){},1000);// =>设置定时器，1000MS后执行匿名函数
```
+ 匿名函数之自执行函数: 创建完一个匿名函数，紧接着就把当前函数加小括号执行
```
(function(n){
     // n=>100
})(100)
```

===================================
let i='10';
i=i+1 =>'10'+1 =>'101
i+=1 =>'101'
i++ =>i=11  i++和以上两种不完全一样，它是纯粹的数学运算

#### arrow function箭头函数
- 简单
```
function sum(n,m){
    return n+m;
}
// 改成箭头函数
let sum=(n,m) => {
    return n+m;
}
// 如果函数体中只有一行RETURN，可以省略RETURN和大括号
let sum=(n,m) => n+m；
```

- 形参赋值默认值:当没有给形参传递实参的时候，执行默认值
```
function sum(n,m){
    if(typeof n === 'undefined'){
        n=0;
        }
    if(typeof m ==='undefined'){
        m =0;
        }
    return n+m;
}
// 形参赋值默认值:当没有给形参传递实参的时候，执行默认值
let sum=(n=0，m=0)=>n+m;
```

- 箭头函数中没有arguments
```
let sum=()=>{
console.1og(arguments);//=>uncaught ReferenceError:arguments is not defined 箭头函数中没有ARGUMENTS};
// 但是我们可以使用剩余运算符获取到传递的实参集合(它是数组，比ARGUMENTS更好玩)
let sum=(...arg)=> eval(arg.join('+'));
```

### Math
- 数学函数：但是它不是一个函数，它是一个对象，对象中储存了很多操作数字属性的方法，所以被称作数学函数

#### Math中常用的属性和方法
> Math.abs([number value])
+ 获取一个数的绝对值永远是是正数或者零
+ 传递的不是数字类型的值：先基于Number()转换为数字再处理

> Math.ceil/floor([number value])
+ 把一个数向上取整/向下取整

> Math.round([number value])
+ 四舍五入(负数中，5属于舍)

> Math.max/min([val1],[val2]...)

> Math.sqrt/pow()
+ sqrt:给一个数开平方
+ pow:计算一个数的多少次幂

> Math.random()
- 获取0-1之间的随机小数

+ 获取[n~m]之间的随机整数
    + Math.round(Math.random()*(m-n)+n)

### 数组常用的方法
+ 方法的作用和含义
+ 方法的实参(类型和含义)
+ 方法的返回值
+ 原来的数组是否会发生改变

> 实现数组增删改的方法
+ push
    + 向数组末尾增加内容
    + @params 多个任意类型
    + @return 新增数组的长度

+ unshift
    + 向数组开始增加内容
    + @params 多个任意类型
    + @return 新增数组的长度
```
// 基于原生ES6展开运算符，把原有的ARY克隆一份，在新的数组中创建第一项，其余的内容使用原始ARY中的信息即可，也算实现从开始追加的效果
ary[100,...ary];
```

> shift:删除数组中的第一项

- @return 删除那一项

> pop:删除数组中的最后一项
+ @return 删除那一项

> splice:实现数组的增加，删除和修改
+ @params n,m都是数字 从索引n开始删除m个元素(m不写，删除到末尾)
+ @return 把删除的部分用新数组存储起来返回
+ 循环中可能会产生数组塌陷问题 解决方法：i--
+ 基于splice实现删除性能不好：当前项被删后，后面每一项的索引都要向前提一位，如果后面内容过多，一定会影响性能
```
//实现增加
arr.splice(3,0,'hhh');
```
> slice:实现数组的查询
+ @params n,m都是数字 从索引n开始，找到索引为m的地方(不包含m这一项)
+ @return 把找到的内容以一个新的数组的形式返回

>concat

```javascript
/*
concat:实现数组拼接
@params
多个任意类型值
@return
拼接后的新数组(原来数组不变)
*/
let ary1=[10，20，30];
let ary2 =[40，50，60];
let res = aryl.concat('珠峰培训'，ary2);
console.1og(res);
```

#### 把数组转换为字符串

> 原有的数组不变

> toString

```javascript
/*
tostring :把数组转换为字符串
@params
@return
转换后的字符串，每一项用逗号分隔(原来数组不变)
*/
let ary =[10，20，30];
let res = ary.tostring();
console.1og(res);//=>"10,20,30"
console.1og([].tostring());//=>""
console.1og([12].tostring());//=>"12'
```

> join

```javascript
/*
join :把数组转换为字符串
@params
指定的分隔符(字符串格式)
@return
转换后的字符串，每一项用逗号分隔(原来数组不变)
*/
let ary =[10，20，30];
let res = ary.join('');
console.1og(res);//=>"102030"

res = ary.join();
console.1og(res);//=>"10,20,30'

res = ary.join('|');
console.1og(res);//=>"10|20|30"

res = ary.join('+');
console.1og(res);//=>"10+20+30"
conso1e.1og(eval(res));//=>60 eva1把字符串变为JS表达式执行
```

#### 数组的排序或者排列

> reverse

```javascript
/*
reverse :把数组倒过来排列
@params
@return
排列后的新数组
原来的数组改变
*/
let ary=[12，15，9，28，10，22];
ary.reverse();
console.1og(ary);//=>[22，10，28，9，15，12]
```

> sort

```javascript
/*
sort:实现数组的排序
@params
可以没有也可以是个函数
@return
	排列后的新数组
原来的数组改变
*/

// SORT方法中如果不传递参数，是无法处理10以上数字排序的(它默认按照每一项第一个字符来排，不是我们想要的效果)
ary=[12，15,9，28，10，22];
ary.sot();
console.1og(ary);//=>[10，12，15，22，28，9]

//想要实现多位数正常排序，需要给SORT传递一个函数，函数中返回 a-b实现升序，返回 b-a 实现降序(为啥?需要先了解冒泡排序的机制，后续讲)
ary=[12，15，9，28，10，22];
// ary.sort(function(a,b){ return a-b; });
// a和b是相邻的两项
ary.sort((a，b)=>a-b);
console.1og(ary);
```

#### 遍历数组

>forEach

```
ary.forEach((item,index)=>{
// 数组中有多少项，函数就会被默认执行多少次
//每一次执行函数:item是数组中当前要操作的这一项，index是当
前项的索引
console.1og('索引:"+index+'内容:'+ item);
});
```



#### 封装一个数组去重的方法

> 代码实现前先给方法进行注释
+ unique:实现数组去重的方法
+ @paramsary [Array]要去重的数组
+ @return[Array]去重后的数组
+ by 名字 on 日期
```
// 常规方法
function unique(ary){
    let obj ={};
    for(let i=0;i<ary.length;i++){
        let item =ary[i];
        if(obj[item]!==undefined){
            ary[i]=ary[ary.length-1];
            ary.length--;
            i--;
            continue;
        }
        obj[item]=item;
    }
    return ary;
}

// 基于ES6的Set(对应的Map)实现去重
let ary[12,23,12,15,23];
ary =[...new Set(ary)];
console.log(ary);
```

### 字符串常用的方法
> 所有用 单引号，双引号，反问号包起来的都是字符串

> charAt / chatCodeAt
+ charAt:根据索引获取指定位置的字符
+ charcodeAt:获取指定字符的ASCII码值(Unicode编码值)
+ @params n[number]获取字符指定的索引
+ @return 返回查找到的字符,找不到返回的是空字符串不是undefined，或者对应的编码值

> substr(n,m): 从索引n开始截取m个字符，m不写截取到末尾(后面方法也是)
> substring(n,m): 从索引n开始找到索引为m处(不含m)
> slice(n,m): 和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法是不可以的
+ 快捷查找：负数索引，我们可以按照STR.LENGTH+负索引 的方式找


> indexOf(x,y):获取x第一次出现位置的索引，y是控制查找的起始位置索引
> lastIndex0f(x):最后一次出现位置的索引=>没有这个字符，返回的结果是-1
> includes

> toUpperCase / toLowerCase

```javascript
/*字符串中字母的大小写转换
	toUppercase():转大写

	toLowercase():转小写
*/
let str ='ZhuFengPeiXunYangFanQiHang';
str= str.touppercase();
console.1og(str);//>'ZHUFENGPEIXUNYANGFANQIHANG
str= str.toLowercase();
console.1og(str);//=>'zhufengpeixunyangfangihang
// 实现首字母大写
str=str.substr(0,1).toUppercase()+str.substr(1);
console.log(str);//=>'Zhufengpeixunyangfanqihang
```

> split

```javascript
/*
split([分隔符]):把字符串按照指定的分隔符拆分成数组(和数组中join对应)
split支持传递正则表达式
*/
let str ='music movie eat sport';
let ary = str.split('|');//=>["music","movie","eat","sport"]
str = ary.join(',');
console.log(str);//=>"music,movie,eat,sport
```

> replace

```javascript
// replace(老字符,新字符): 实现字符串的替换(经常伴随着正则而用)
1et str ='珠峰@培训@扬帆@起航'
str= str.replace('@','-');
console.1og(str);//=>"珠峰-培训@扬帆@起航”在不使用正则表达式的情况下，执行一次REPLACE只能替换一次字符
str=str.replace(/@/g，'-');console.1og(str);//=>珠峰-培训-扬帆-起航
```

#### 实现一些常用的需求

> 时间字符串处理

```javascript
let time ='2019-7-24 12:6:23'
//=> 变为自己需要呈现的格式，例如:
//“2019年07月24日 12时06分23秒"
//“2019年07月24日"
//“07/24 12:06"

//不足十位补零的方法
et addzero =val =>val.length <2 ?'0'+ val : val;
//处理方式
let ary= time.split(/(?:1-l:)/g);
//=>["2019"，"7"，"24"，"12"，"6”，"23"]
time =ary[0]+'年'+ addzero(ary[1])+'月'+addzero(ary[2])+'日';
```

> queryURLParams

```javascript
/*
queryURLParams:获取URL地址中间号传参的信息和哈希值
@params
url [string]要解析的URL字符串
@return
[object]包含参数和哈希值信息的对象
*/
function queryURLParams(url){
	let askIndex = url.indexOf('?'),
 		wellIndex = url.indexOf('#');
 		askText = '',
 		wellText = '';
	wellIndex=== -1 ? wellIndex=url.length : null;
	askIndex >= 0 ? askText = url.substring(askIndex+1,wellIndex) : null;
	wellText =url.substring(wellIn+1);
	
	let result = {};
	wellText !==''? result['HASH'] =wellText : null;
	if(askText !== ''){
		let ary = askText.split('&');
		ary.forEach(item =>{
			let itemAry =item.split('=');
			result[itemAry[0]]=itemAry[1];
		})
	}
	return result;
}
```

> 实现一个最低级的验证码：数字+字母四位
>
> 验证码目的：防止外挂程序恶意批量注入导致服务器崩溃

```javascript
/*
queryCode:获取四位验证码
@params
@return
*/
function queryCode(){
            let area ='ABCDEFGHIJKLMNOPORSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            
            let result ='';
            for(let i =0;i<4;i++){
                // 每一次循环都获取一个随机的数字索引
                let ran = Math.round(Math.random()*61);
                //再根据获取的索引从范围字符串中找到对应的字符，把找到的字符拼接到最后的结果中
                result += area.charAt(ran);
               
            }
            codebox.innerHTML =result;
        }

```

#### 日期对象的基本操作

```javascript
let time = new Date;
/*
获取当前客户端(本机电脑)本地的时间号
	这个时间用户是可以自己修改的，所以不能作为重要的参考依据
*Fri Ju] 26 2019 10:02:17 GMT+0800(中国标准时间)
获取的结果不是字符串是对象数据类型的，属于日期对象(或者说是Date这个类的实例对象)
*/
typeof time;//=>"object'
```

> 标准日期对象中提供了一些属性和方法，供我们操作日期信息

+ getFullYear() 获取年
+ getMonth()

+ getFullYear()获取年
+ getMonth()获取月
+ getDate()获取日
+ getDay()获取星期
+ getHours()获取时
+ getMinutes()获取分
+ getseconds()获取秒
+ getMilliseconds() 获取毫秒
+ getTime() 获取当前日期距离1970/1/1 00:00:00 这个日期之间的毫秒差
+ toLocaleDateString() 获取年月日(字符串)
+ toLocaleString() 获取完整的日期字符串

> 小时钟

```javascript
let clockbox = document.getElementById('clockbox');
function addZero(num){
	num = Number(num);
	return num<10?'0'+num : num;
}
/*
	queryDate:获取当前的日期，把其转换为想要的格式
	@params
	@return
*/
function queryDate(){
	let time = new Date(),
	year = time.getFullYear(),
	month =time.getMonth()+ 1,
	day = time.getDate(),
	week= time.getDay(),
	hours = time.getHours(),
	minutes = time.getMinutes(),
	seconds =time.getSeconds();

	let weekAry = ['日','一','二','三','四','五','六'];

	let result =year + "年"+ addZero(month)+"月"+ addZero(day)+"日";
	result +=" 星期"+ weekAry[week]+" ";
	result += addZero(hours)+addZero(minutes)+":"+ addZero(seconds);
	//3.把处理好的结果放到盒子中
	clockbox.innerHTML =result;
	

}
queryDate();

// 定时器控制运动:设置一个setInterval定时器(到达指定时间干什么事情的东西就是定时器)，每隔1000MS执行queryDate方法
setInterval(queryDate,1000);
```

> new Date()除了获取本机时间，还可以把一个时间格式字符串转换为标
> 准的时间格式

#### 时间字符串格式化案例

```javascript
String.prototype.formatTime = function formatTime(template){

  // 初始化模板

  typeof template ==='undefined'?template ="{0}年{1}月{2}日{3}:{4}:{5}" :null;

  // this:要处理的字符串

  // 获取日期字符串中的数字信息

  let matchAry = this.match(/\d+/g);

  //模板和数据的渲染(引擎机制)

  template =template.replace(/\{(\d+)\}/g,(x,y)=>{

​    let val = matchAry[y]|'00';

​    val.length<2?val='0'+ val : null;

​    return val;

});

  return template;

}

let time = '2024-9-8 22:36:00';

console.log(time.formatTime("{1}-{2} {3}:{4}"));
```

#### DOM及其基础操作

>DOM:document object model文档对象模型，提供一些属性和方法供
>
>我们操作页面中的元素

##### 获取DOM元素的方法

+ document.getElementByld() 指定在文档中，基于元素的ID或者这个元素对象
+ [context].getElementsByTagName() 在指定上下文(容器)中，通过标签名获取一组元素集合
+ [context].getElementsByClassName() 在指定上下文中，通过样式类名获取一组元素集合(不兼容IE6~8)
+ document.getElementsByName()在整个文档中，通过标签的NAME属性值获取一组节点集合(在IE中只有表单元素的NAME才能识别，所以我们一般只应用于表单元素的处理)
+ document.head /document.body/document.documentElement 获取页面中的 HEAD/BODY/HTML 三个元素
+ [context].querySelector([selector])在指定上下文中，通过选择器获取到指定的元素对象
+ [context].querySelectorAll([selector])在指定上下文中，通过选择器获取到指定的元素集合

```javascript
//=>queryselector /queryselectorAll不兼容IE6~8
1et box=document.queryselector('#box');
1et links=box.queryselectorA11('a');
// 1inks=document.queryselectorA11('#box a');
1et aas=document.queryselectorA11('.aa');
```

#### JS中的节点和描述节点之间关系的属性

> 节点 : Node(页面中所有的东西都是节点 )
> 节点集合 : NodeList(getElementsByName/querySelectorAll 获取的都是节点集合)

+ 元素节点(元素标签)
  + nodeType :1
  + nodeName:大写的标签名
  + nodeValue: null
+ 文本节点
  + nodeType :3
  + nodeName:'#text'
  + nodeValue: null
+ 注释节点
  + nodeType :8
  + nodeName:'#commen'
  + nodeValue: 注释内容
+ 文档节点 document
  + nodeType :9
  + nodeName:'#document'
  + nodeValue: null
+ ...

##### 描述这些节点之间关系的属性

+ childNodes :获取所有的子节点
+ children:获取所有的元素子节点(子元素标签集合)
+ parent:获取父亲节点
+ firstChild:获取第一个子节点
+ lastChild:获取最后一个子节点
+ firstElementChild/lastElementChild :获取第一个和最后一个元素子节点(不兼容IE6~8)
+ previoussibling:获取上一个哥哥节点
+ nextSibling:获取下一个弟弟节点
+ previousElementSibling/nextElementSibling:获取哥哥和弟弟元素节点(不兼容IE6~8)
+ ...

#### 在JS中动态增删改元素

+ createElement 创建元素对象
+ createTextNode 创建文本对象
+ appendChild 把元素添加到容器的末尾
+ insertBefore 把元素添加到指定容器中指定元素的前面

```javascript
// 动态创建一个DIV元素对象，把其赋给BOX
let box=document.createElement('div');
box.id = 'boxActive';
box.style.width='200px';
box.style.height ='200px';
box.className ='RED';

//动态创建一个文本
1et text=document.createTextNode('珠峰培训');

// 添加:容器.appendChild(元素)
box.appendChild(text);
// document.body.appendChild(box);

//放到指定元素前:容器.insertBefore([新增元素]，[指定元素])
let haha = document.getElementById('haha');
// haha.parentNode.insertBefore(...)
document.body.insertBefore(box,haha);
```

+ cloneNode(true/false) 克隆元素或者节点

```html
<div class="box">
	<span>珠峰培训1</span></div>
<script>
	let boxl = document.queryselector('.box');
   // 克隆第一份(深克隆)
    let box2 = box1.cloneNode(true);
    box2.queryselector('span').innerText='珠峰培训2';
	// 克隆第二份(浅克隆)
	let box3= box1.cloneNode(false);
    box3.innerHTML ="<span>珠峰培训3</span>";
    
	document.body.appendchi1d(box2);
    document.body.appendchi1d(box3);
	//====================
	// 容器.removechi1d(元素)
	document.body.removechild(box2);
</script>
```

+ setAttribute/getAttribute /removeAttribute 设置获取移除元素的自定义属性信息(这种方式是把自定义属性放到元素结构上)

```javascript
var btnList =document.queryselectorA1l('button');
for(var i=0;i<btnList.length; i++){
// 设置自定义属性:元素对象.属性名=属性值(原理是向元素对象对应的堆内存中添加了一个属性)
// btnList[i].myIndex =i;

// 设置自定义属性:基于SET-ATTRIBUTE是把属性信息写到了元素标签的结构上(在结构中可以看到的)，并没有放到元素对象对应的堆内存中
btnList[i].setAttribute('data-index', i);
btnList[i].onclick=function(){
// 获取自定义属性:元素对象.属性名(原理是从堆内存中获取到对应的属性值)
// alert(this.myIndex);
// 基于GET-ATTRIBUTE可以把结构上存储的自定义属性值获取
alert(this.getAttribute('data-index'));
```

### GIT版本控制系统

> 版本控制系统：
>
> 1.记录历史版本信息(记录每一次修改的记录)
>
> 2.方便团队相互之间协作开发
>
> ....
>
> 常用的版本控制系统
>
> + cvs/svn:集中式版本控制系统
> + git :分布式版本控制系统

#### GIT工作原理

+ 工作区:我们能看到的，并且用来写代码的区域
+ 暂存区:临时存储用的
+ 历史区:生成历史版本

##### 1.GIT的全局配置

> 第一次安装完成git后，我们在全局环境下配置基本信息:我是谁?

```shell
$ git config -l 查看配置信息
$ git config --global-l 查看全局配置信息

配置全局信息:用户名和邮箱
$ git config --global user.name 'XXX'
$ git config --global user.email 'xxx@xx.xx'
```

##### 2.创建仓库完成版本控制

> 创建本地git仓库

```shell
$ git init
//=>会生成一个隐藏文件夹“.git”(这个文件夹千万不要删，因为暂存区和历史区还有一些其它的信息都在这里，删了就不是一个完整的git仓库)
```

> 在本地编写完成代码后(在工作区)，把一些文件提交到暂存区

```shell
$ git add xxx 把某一个文件或者文件夹提交到暂存区
$ git add . 把当前仓库中所有最新修改的文件都提交到暂存区
$ git add -A 

$ git status 查看当前文件的状态(红色代表在工作区，绿色代表在暂存区，看不见东西证明所有修改的信息都已经提交到历史区)
```

> 把暂存区内容提交到历史区

```shell
$ git commit -m'描述信息:本次提交内容的一个描述'

查看历史版本信息(历史记录)
$ git log
$ git reflog 包含回滚的信息
```

### GIT和GIT-HUB

> GIT-HUB : https://www.github.com
>
> 一个网站(一个开源的源代码管理平台)，用户注册后，可以在自己账户下创建仓库，用来管理项目的源代码(源代码是基于git传到仓库中)
>
> 我们所熟知的插件、类库、框架等都在这个平台上有托管，我们可以下载观看和研究源码等

#### 1.Settings 用户设置
+ Profile 修改自己的基本信息
+ Account 可以修改用户名
+ Security 可以修改自己的密码
+ Emails 邮箱(必须进行邮箱校验 )
+ ...

#### 2.创建仓库

newrepository->填写信息->Create repository

+ public 公共仓库作为开源的项目

+ private 私有仓库作为内部团队协作管理的项目

  

  Settings ->删除仓库Delete this repository

  ​				-> tollaborators 设置协作开发的人员
  Code 可以查看历史版本信息和分支信息

#### 3.把本地仓库信息提交到远程仓库

```shell
//=>建立本地仓库和远程仓库的链接查看本地仓库和哪些远程仓库保持链接
$git remote -v
让本地仓库和远程仓库新建一个链接 origin是随便起的一个链接名(可以改成自己想要的，只不过一般都用这个名字)
$ git remote add origin[GIT远程仓库地址]删除关联信息
$ git remote rm origin
```

```shell
提交之前最好先拉取
$ git pull origin master
把本地代码提交到远程仓库(需要输入github的用户名密码)
$ git push origin master
```





### 变量提升

> 当浏览器开辟出供代码执行的栈内存后，代码并没有自上而下立即执行，而是继续做了一些事情:**把当前作用域中所有带var/function关键字的进行提前的声明和定义 =>变量提升机制**
>
> + 带var的只是提前声明(declare)“var a;”如果只声明没有赋值，默认值是undefined
> + 带function的不仅声明，而且还定义了(defined)“a=13“定义其实就是赋值，准确来说就是让变量和某个值进行关联

#### 1.带var和不带var的区别

```javascript
//=>在全局作用域下的区别
//不带var的:相当于给全局对象window设置了一个属性a
//window.a = 13;

a = 13;
console.1og(a);//=>window.a

/*
栈内存变量存储空间
b
带var的:是在全局作用域下声明了一个变量b(全局变量)，但是在全局下声明的变量也同样相当于给window增加了一个对应的属性(只有全局作用域具备这个特点)
*/
var b = 14;//=> 创建变量b & 给window设置了属性b
conso1e.1og(b);//=>14
conso1e.1og(window.b);//=>14
```



#### let/const和var的区别

> 1.let 和const不存在变量提升机制

+ 创建变量的六种方式中:var/function有变量提升，而let/const/class/import都不存在这个机制

> 2.var允许重复声明，而let是不允许的

> 在相同的作用域中(或执行上下文中)
>
> + 如果使用var/function关键词声明变量并且重复声明，是不会有影响的(声明第一次之后，之后再遇到就不再重复声明了)
> + 但是使用let/const就不行，浏览器会校验当前作用域中是否已经存在这个变量了，如果已经存在了，则再次基于let等重新声明就会报错

```javascript
//=>在浏览器开辟栈内存供代码自上而下执行之前，不仅有变量提升的操作，还有很多其它的操作=>“词法解析"或者“词法检测”:就是检测当前即将要执行的代码是否会出现“语法错误 syntaxError"，如果出现错误，代码将不会再执行(第一行都不会执行)
console.log(1);//=>这行代码就已经不会再被执行了
let a = 12;
console.log(a);
let a=13;//=>Uncaught syntaxError: Identifier 'a  hasalready been declared
console.log(a);
```

> 3.let能解决typeof检测时出现的暂时性死区问题(LET比VAR更加严谨)

```javascript
// console.log(a);
//=>Uncaught ReferenceError:a is not defined

// console.log(typeof a);
//=>"undefined”这是浏览器BUG，本应该是报错的，因为没有a(暂时性死区)

console.log(typeof a);//=>uncaught ReferenceError:Cannot access a'before initialization
let a;
```

