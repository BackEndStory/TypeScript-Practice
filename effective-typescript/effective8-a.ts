/*  58.모던 자바스크립트로 작성하기 */


// CommonJS
//const b34 = require('./effective8-b');
//console.log(b34.name);


// ECMAScript module
//import * as b from './effective8-b';
//console.log(b.name4);


// function Person4(first, last){
//     this.first = first;
//     this.last = last;
// }
// Person4.prototype.getName = function(){
//     return this.first +' ' +this.last;
// }
// const marie = new Person4('Marie','Curie');
// const personName = marie.getName();


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

/* 59.타입스크립트 도입 전에 @ts-check와 JSDoc으로 시험해보기 */

// @ts-check
const person = {first:'Grace', last:'Hopper'};
//2 * person.first;   //ts-check가 오류를 찾아줌 


// @ts-check
console.log(user.firstName);



/* 61.의존성 관계에 따라 모듈 단위로 전환하기 */

class Greeting1{
    greeting: string;
    name: string;
    constructor(name: string){
        this.greeting = 'Hello';
        this.name = name;
    }
    greet(){
        return this.greet + '' +this.name;
    }
}


// const state1 = {
//     name:'New York',
//     capital:'Albany'
// };

interface State1{
    name:string;
    capital:string;
}

const state1 = {} as State1;
state1.name = 'New York';
state1.capital = 'Albany';




function double12(num:number){
    return 2*num;
}
// double12('we'); Error





/* 62.noImplicitAny 설정하기 */
class Chart{
    indices:number[][];
    constructor(indices:number[][]){
        this.indices = indices;
    }
    getRanges(){
        for(const r of this.indices){
            const low = r[0];
            const high = r[1];
        }
    }
}
