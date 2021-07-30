### [ES6中的三个点 ... 有两个名字:rest参数和扩展运算符.](https://zhuanlan.zhihu.com/p/32038245)

- 当用在函数定义时的形参前面时,称为rest参数,当函数调用时,用于接收不确定的参数.
- 当与解构赋值组合使用时,称为rest参数,用于接收剩余的值,存储在数组中.
- 当用在字符串或数组前面时称为扩展运算符,将数组或字符串进行拆解.
1 rest参数:

1.1 定义函数实现计算传入所有参数的和.

使用arguments参数
```function sumArgu () {
     var result = 0;
     for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result
}
console.log(sumArgu(1,2,3));//6
```
使用rest参数...
```function sumRest (...m) {
	var total = 0; 
	for(var i of m){
	    total += i;
	}
	return total;
}
console.log(sumRest(1,2,3));//6
```
- arguments是一个类数组,本质是对象;
- rest参数m,是真正的数组,可以正常调用数组的所有方法.
- 在某些场景中,无需将arguments转为真正的数组,可以直接使用rest参数代替.

1.2 定义函数时,rest参数也可以与其他的形参共存,此时rest参数存储调用时,除明确的形参之外剩余的参数.
```
function isPush (a,b,c,...m) {
	if(m.indexOf(a) == -1) m.push(a);
	if(m.indexOf(b) == -1) m.push(b);
	if(m.indexOf(c) == -1) m.push(c);
	return m;
}
console.log(isPush(1,2,3,1,2,5,6,4));//[1, 2, 5, 6, 4, 3]
```
- 上述函数中,在函数调用时,m数组接收传入参数的第四个参数到最后一个参数组成的数组[1,2,5,6,4].当参数不足三个时,m为空数组[].

1.3 与解构赋值组合使用
```
var array = [1,2,3,4,5,6];
var [a,b,...c] = array;
console.log(a);//1
console.log(b);//2
console.log(c);//[3, 4, 5, 6]
```
- 备注:rest参数可理解为剩余的参数,所以必须在最后一位定义,如果定义在中间会报错.


2 扩展运算符

2.1 基本用法;拆解字符串与数组.
```
var array = [1,2,3,4,5];
console.log(...array);//1 2 3 4 5
var str = "String";
console.log(...str);//S t r i n g
```
2.2 代替数组的concat(),push(),unshift()等方法.
```
var array0 = [1,2];
var array1 = [9,8];
var array2 = [1,2];
//使用concat()向数组内追加元素;
console.log(array0.concat(3,4));//[1, 2, 3, 4]
// 使用push()向数组内追加元素
array2.push(3,4);
console.log(array2);//[1, 2, 3, 4]
//使用扩展运算符向数组内追加元素
console.log([...array0,3,4]);////[1, 2, 3, 4]
//使用concat连接两个数组
console.log(array0.concat(array1));//[1, 2, 9, 8]
// //使用push连接两个数组
Array.prototype.push.apply(array0, array1);
console.log(array0);//[1, 2, 9, 8]
//使用扩展运算符连接两个数组
console.log([...array0,...array1]);//[1, 2, 9, 8, 9, 8]
array0.push(...array1);
console.log(array0);//[1, 2, 9, 8, 9, 8]
```

2.3 拷贝数组或对象,进行浅拷贝.
```
var array0 = [1,2,3];
var array1 = [...array0];
console.log(array1);//[1, 2, 3]
var obj = {
	age:1,
	name:"lis",
	arr:{
		a1:[1,2]
	}
}
var o = {...obj};
console.log(o);//{age: 1, name: "lis", arr: {…}}
```

2.4 某些场景可以替代apply().

使用Math.max()求数组的最大值.
```
var array = [1,2,3,4,3];
//使用apply
var max1 = Math.max.apply(null,array);
console.log(max1);//4
//使用扩展运算符
var max2 = Math.max(...array);
console.log(max2);//4
```
2.5 将伪数组转化为数组
```
//伪数组转换为数组
var divs = document.getElementsByTagName('div');
console.log([...divs]);//[div, div]
```
使用扩展运算符将伪数组转换为数组有局限性,这个类数组必须得有默认的迭代器.且伪可遍历的.
```
var likeArray = {0:"one",1:"two",2:"thr",length:3};
console.log([...likeArray]);
//报错 Uncaught TypeError: likeArray is not iterable
//添加迭代器,可使用扩展运算符转换
var likeArray = {0:"one",1:"two",2:"thr",length:3,[Symbol.iterator]: Array.prototype[Symbol.iterator]};
console.log([...likeArray]);//["one", "two", "thr"]
//伪数组的转换,ES6提供了更便利的方法Array.from();也可以使用ES5的slice()结合call()
//ES6
console.log(Array.from(likeArray));
//ES5
console.log(Array.prototype.slice.call(likeArray));
```

