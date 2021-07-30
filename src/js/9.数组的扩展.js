

//扩展运算符

/* 扩展运算符（spread）是三个点（...）。
它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。 */
/* console.log(1, ...[2, 3, 4], 5) */




/* function push(array, ...item){
    array.push(...item);
}

function add(x,y){
    console.log(x+y);
    return x+y;
}

const numbers = [4,38,25];
add(...numbers)
 */
/* function f(v,w,x,y,z){
    console.log(v+w+x+y+z)
}

const args = [0,1];
f(-1, ...args,2, ...[3]);



//扩展运算符后面还可以放置表达式
const arr = [
    ...(x > 0 ? ['a'] : []),'b',
  ]; */

// 只有函数调用的时候，扩展云端福才可以放在圆括号中，否则会报错
/* (...[1, 2])
// Uncaught SyntaxError: Unexpected number

console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number

console.log(...[1, 2])
// 1 2 */


// ...替代函数的apply方法
// 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。
//ES5的写法
/* function f(x,y,z){

}

var args = [0,1,2];

f.apply(null,args);
// ES6的写法

function f(x,y,z){

}

let args = [0,1,2];
f(...args);
 */


/* console.log("123");
console.log(Math.max(...[12,89,23,41,-1])); */

/* ES5的写法 */
/* console.log(Math.max.apply(null,[456,65,35,98]));
var arr1 = [0,1,2,3];
var arr2 = [45,7,8,9];
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);

new (Date.bind.apply(Date, [null,2015,1,1]))

 */

// ES6的写法

/* let arr3 = [1,5,8,2];
let arr4 = [8,9,6,3];
arr3.push(...arr4);
console.log(arr3)
new Date(...[2015,1,1]); */



//扩展运算符的应用
//（1）复制数组

//数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。

/* const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1  */// [2, 2]
//上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。

// ES5 只能用变通方法来复制数组。

/* const a1 = [1,2];
const a2 = a1.concat();

a2[0] =2 ; */


/* const a1 = [1,2];
const a2 = [5,8,9];
const a3 =[23,45,6]; */

/* const a2 = [...a1];

const [...a2] = a1; */

/* const a4 = a1.concat(a2,a3);
const a5 = [...a1,...a2,...a3];
a1[0]=250;
console.log(a4);
console.log(a5);
console.log(a1[0]);
 */

// 与解构复制结合

// 扩展运算符可以与解构赋值结合起来，用于生成数组
//const [first,...second] = [0,1,2,3,4,5];

/* const [first,...second] = ['fjkdgh','gg','dfg','dfgd'];
console.log(first);
console.log(second);
 */


/* var c = [...'hello'];
console.log(c);
 */

// let nodeList = document.querySelectorAll('div');
// let array = [...nodeList];
// console.log(array);



/* Number.prototype[Symbol.iterator] = function*() {
    let i = 0;
    let num = this.valueOf();
    while (i < num) {
      yield i++;
    }
  }
  
  console.log([...5]) 
 */

//   let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
//   };
  
//   // TypeError: Cannot spread non-iterable object.
//   let arr = [...arrayLike];



// let map  =new Map([
//     [1,'one'],
//     [2,'two'],
//     [3,'three'],
// ])
// let arr = [...map.keys()]
// console.log(arr);



/* Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）
 和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。*/


/* let arrayLike = {
  '0':'a',
  '1':'b',
  '2':'c',
  length: 3
};

var arr1 = [].slice.call(arrayLike);

var arr2 = Array.from(arrayLike);
console.log(arr2);
 */

/* var arr1 = Array.from('hello');
console.log(arr1); */


/* 
let namesSet = new Set(['a','b']);
var ab = Array.from(namesSet);
console.log(ab);
 */



// 值得提醒的是，扩展运算符（...）也可以将某些数据结构转为数组。




/* Array.from还可以接受第二个参数，
作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。 */

/* let arrayLike = {
  '0':2,
  '1':4,
  '2':6,
  length: 3
};

console.log(Array.from(arrayLike,a => a*a));

console.log(Array.from(arrayLike).map(c =>c-10));

console.log(Array.from([5,6,9],(w)=>w*10));

let spans = document.querySelectorAll('span.name');

let names1 = Array.prototype.map.call(spans,s=> s.textContent);

let names2 = Array.from(spans,s =>s.textContent);
 */
/* console.log(Array.from([1,,2,,3,,4],(n) => n || 0)); */


/* 
function typesOf (){
  return Array.from(arguments, value => typeof value)
}

console.log(typesOf(null,[],123));

 */
/* 
console.log(Array.of(3,11,4)); */

/* 
数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

Array.prototype.copyWithin(target, start = 0, end = this.length) */


/* console.log([1,2,3,4,5,6,7,8,9].copyWithin(0,4)); */




