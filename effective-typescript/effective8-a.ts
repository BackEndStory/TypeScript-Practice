/*  58.모던 자바스크립트로 작성하기 */


// CommonJS
//const b34 = require('./effective8-b');
//console.log(b34.name);


// ECMAScript module
//import * as b from './effective8-b';
//console.log(b.name4);


function Person4(first, last){
    this.first = first;
    this.last = last;
}
Person4.prototype.getName = function(){
    return this.first +' ' +this.last;
}
const marie = new Person4('Marie','Curie');
const personName = marie.getName();


// => 프로토타입 클래스로

class Person5{
    first:string;
    last:string;
    constructor(first:string,last:string){
        this.first = first;
        this.last = last;
    }

    getName(){
        return this.first +' ' +this.last;
    }
}

const marie2 = new Person5('Marie','Curie');
marie2.getName();

const obj34 = { props2:{ a112:'a', b112:'b'}};
const props1 = obj34.props2
// const a1212 = props1.a;
// const b1212 = props1.b;

const {props2} = obj34;
const {a112,b112} = props2;


// Map,set 사용
function countWordsMap(text:string){
    const counts = new Map<string,number>();
    for(const word of text.split(/[\s,.]+/)){
        counts.set(word,1+(counts.get(word) || 0));
    }
    return counts;
}
