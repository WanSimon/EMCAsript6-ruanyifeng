/* function log(x,y){
    y = y ||'world';
    console.log(x,y);

}

log('Hello') */


//不能用let或者const再次声明
/* function foo(x = 20){
     x = 30;

}

foo(); */

// 使用参数默认值的时候，函数不能有同名参数
/* function Simon(x,x,y){

}

function Wan(x,x,y=10){

}
Simon();
Wan(); */



// 另外，一个容易忽略的地方是，参数默认值不是传值的，
//而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。

// let x = 99;
// function foo(p = x + 1) {
//   console.log(p);
// }

// foo() // 100

// x = 100;
// foo() // 101
// 上面代码中，参数p的默认值是x + 1。
//这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。


/* function foo({x, y = 20}){
    console.log(x,y);
}

foo({});
 foo({x:1},{y:256});
 foo({x: 2});
 */



/*   function foo({x, y = 5,z} = {}) {
    console.log(x, y,z);
  }
  
  foo();    */
/* 
  function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(url,body,method,headers)
  }
  
  fetch('http://example.com', {body:'wang'} ,{method:'liu'},{headers:'baidu'});  */


/*   [1,2,3].map(function (x) {
    return x * x;
  });
console.log([1,2,3].map(function (x) {
    return x * 9;
  }));   */


  //var result = values.sort((a, b) => a - b);