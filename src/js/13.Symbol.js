/* let s = Symbol();

console.log(s); */



/* let s1 = Symbol('foo');

let s2 = Symbol('Simon');

console.log(s1);
console.log(s2);

console.log(s1.toString());
console.log(s2.toString());
console.log('s2.toString()');
 */
/* const obj = {
    toString(){
        return '123456';
    }
};

const sym = Symbol(obj);
console.log(sym); */




/* let s1 = Symbol('foo');
let s2 = Symbol('foo');

console.log(s1===s2);
console.log(s1.description);

let mySymbol = Symbol();

let a = {};
a[mySymbol] = 'Hello!';

let b ={
    [mySymbol]:'Hello!';
}

let c = {};

Object.defineProperty(a,mySymbol,{value:'Hello!'});

a[mySymbol] */

/* function getArea(shape,options){
    let area = 0;
    switch(shape){
        case 'Triangle':
            area = .5 * options.width * options.height;
            break;
    }
    return area;

}

console.log(getArea('Triangle',{width:100,height:100})); */


/* const shapeType ={
    triangle: 'Triangle'
};


function getArea(shape,options){
    let area = 0;
    switch(shape){
        case shapeType.triangle:
            area = .5*options.width*options.height;
            break;
    }
    return area;
}

getArea(shapeType.triangle,{width:100,height:100});
 */


/* 
const obj ={};

let a = Symbol('a');
let b = Symbol('b');

obj[a]= 'Hello';
obj[b]='Money';

const objectSymbol = Object.getOwnPropertySymbols(obj);

console.log(objectSymbol);
 */

/* const obj = {};
const foo = Symbol('foo');

obj[foo] = 'bar';

for (let i in obj){
    console.log(i);
}

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
 */



let obj = {
    [Symbol('my_key')]:1,
    enum: 2,
    nonEnum:3
}

console.log(Reflect.ownKeys(obj));

let size = Symbol('size');
class Collection {
    constructor(){
        this[size] = 0;
    }
    add(item){
        this[this[size]] = item;
        this[size]++;
    }
    static sizeOf(instance){
        return instance[size];
    }

}

let x = new Collection();
console.log(Collection.sizeOf(x));








