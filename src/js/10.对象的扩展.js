const china = {henan: "zhoukou "};
console.log(china);


let ms = {}

function getItem(key){
    return key in ms? ms[key]:null;
}


function setItem(key,value){
    ms[key] = value;
}

function clear(){
    ms = {}
}
/* 
module.exports = {getItem,setItem,clear}; */

/* 
const money = {
    _rmb:120,


    get rmb (){
        return this._rmb
    },
    set rmb (value){
        if(value<this._rmb){
            throw new Error('数值太小了');
        }
        this._rmb = value;
    }

} */


/* let monument = {
    name:'huashan'
}

let lake = {
    position:'hunan'
}

console.log(monument,lake); */


/* var obj

obj.foo = true;

obj['a'+'bc'] = 123; */

/* var obj = {
    foo:true,
    abc:123
}

obj.master=123456;
obj['simon']='wangxuemeng';
console.log(obj);
 */


/* let lastword ='last word'

const a = {
    'first word' :'hello',
    [lastword]:'world'
};

console.log(a['first word']);
console.log(a[lastword]);
console.log(a['last word']); */


/* const person = {
    sayName() {
        console.log('hello!');
    },
};

console.log(person.sayName.name);
 */

/* const obj = {
    get foo(){},
    set foo(x){}

};

const descriptor = Object.getOwnPropertyDescriptor(obj,'foo');

console.log(descriptor.get.name);
console.log(descriptor.set.name);


console.log((new Function()).name);

var doSomething = function(){

};

console.log(doSomething.bind().name) */

/* const key1 = Symbol('descriptor');
const key2 = Symbol();

let obj = {
    [key1]() {},
    [key2]() {},
};

console.log(obj[key1].name);
console.log(obj[key2].name); */

/* let obj = {foo : 123};

console.log(Object.getOwnPropertyDescriptor(obj,'foo').value) */

/* const proto = {
    foo: 'hello'
};

const obj = {
    foo: 'world',
    find(){
        return super.foo;
    }
};

Object.setPrototypeOf(obj,proto);
console.log(obj.find()); */


/* let {x,y, ...z} = {x:1,b:2,c:3,d:6};

console.log(z); 
 */

/* let obj = {a:{b:1}};

let {...x} = obj

obj.a.b = 2;


console.log(x.a.b); */

/* let o1 = {a: 1};
let o2 = {b: 2};
o2._proto_ = o1;
let {...o3} = o2;
console.log(o3);
console.log(o3.a)  */

/* 
let z = {a:3,b:5};
let n ={...z};
console.log(n); */


/* let foo = {...['a','b','c']};
console.log(foo);

console.log({...'hello'});
 */

/* const clone1 = {
    _proto_:Object.getPrototypeOf(obj),
    ...obj
};

const clone2 = Object.assign(
    Object.create(Object.getPrototypeOf(obj)),
    obj
);

const clone3 = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
)


let ab = {...a, ...b};

let ab = Object.assign({},a,b); */

let aWithOverrides = {...a, x:1,y:2};

let aWithOverrides1 = {...a, ...{x:1,y:2}};

let x= 1,y=2, aWithOverrides2 = {...a,x,y};
let oreg = Object.assign({},a,{x:1,y:2});






