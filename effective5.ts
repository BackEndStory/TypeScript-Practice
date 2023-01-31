
/* 38.any타입은 가능한 한 좁은 범위에서만 사용하기 */

import { ObjectLiteralElementLike } from "typescript";


interface Foo{ foo:string;}
interface Bar{ bar:string;}
function expressionReturningFoo(){}
function processBar(b:Bar){}

function f1(){
    const x:any = expressionReturningFoo();
    //@ts-ignore
    processBar(x);
    return x;
}
function g1(){
    const foo = f1();
    foo.fooMethod1();
}

function f2(){
   const x = expressionReturningFoo();
   processBar(x as any);
}

function g2(){
    const foo = f2();
   // foo.fooMethod();
}

interface Config{
    a:number;
    b:number;
    c:{ key:Foo}
}

const value:Bar = { bar:'sd'};

const config1 : Config = {        // xxxx
    a:1,
    b:2,
    c:{
        key:value
    }
} as any;

const config2 : Config = {        // xxxx
    a:1,
    b:2,
    c:{
        key: value as any,
    }
};

/* 39.any를 구체적으로 변형해서 사용하기 */

function getLengthBad(array:any){
    return array.length;
}

function getLength(array:any[]){                  // 함수의 반환 타입이 any대신 number로 추론됩나다.
    return array.length;                          // 함수 호출될 때 매개변수가 배열인지 체크됩니다.
}

getLengthBad(23);
//getLength(23);    // Error

function haTwelveLetterKey(o:{[key:string]:any}){
    for(const key in o){
        if(key.length === 12){
            return true;
        }
    }
    return false;
}

haTwelveLetterKey({'a':23,'b':'we'});

type Fn0 = () => any;                 // 매개변수 없이 호출 가능한 모든 함수
type Fn1 = (arg:any) => any;          // 매개변수 1개
type Fn2 = (...args:any[]) => any;    // 모든 개수의 매개변수


/* 40.함수 안으로 타입 단언문 감추기 */

//declare function cacheLast<T extends Function>(fn:T):T;
//function shallowEqual<T extends object>(a:T,b:T):boolean;

function shallowEqual<T extends object>(a:T,b:T):boolean{
    for(const [k,aVal] of Object.entries(a)){
        if(!(k in b) || aVal !== (b as any)[k]){
            return false;
        }
    }
    return Object.keys(a).length === Object.keys(b).length;
}
shallowEqual({'a':23},{'b':34});

function cacheLast<T extends Function>(fn:T):T{
    let lastArgs:any[]|null = null;
    let lastResult:any;
    return function(...args:any[]){
        if(!lastArgs || !shallowEqual(lastArgs,args)){
            lastResult = fn(...args);
            lastArgs = args;
        }
        return lastResult;
    } as unknown as T;
}

/* 41.any의 진화 이해하기 */

function range1(start:number, limit:number){
    const out = [];
    // if(start === limit){
    //     return out;
    // }
    
    for(let i = start; i<limit ; i++){
          out.push(i);
    }
    return out;                     // number 값이 들어가며, any => number 배열로 바뀜
}

function range2(start:number, limit:number){
   //const out = [];              Error

  range1(start, limit).forEach(i => {
  //  out.push(i*i);
  })
   // return out;                  Error
}


let val = null;                    // any => number => number | null
try{
    val = 12;
    val
}catch(e){
    console.warn('alas!');
}
val

let val1 : any;            // any로 선언 시 쭉 타입은 any로 설정
val1 = 'hello';
val1
val1 = 12;
val1

/* 42.모르는 타입의 값에는 any대신 unknown을 사용하기 */

function parseYAML(yaml:string):any{};

interface Book{
    name:string;
    author:string;
}

const book1 = parseYAML(`
                name:Wuthering Heights 
                author:Emily Bronte
                `);
alert(book1.title);
book1('read');

function safePaseYAML(yaml:string):unknown{
    return yaml;
}

const book2 = safePaseYAML(`name:Wuthering Heights author:Emily Bronte`);
//alert(book2.title);     Error 
//book2('read');          Error

interface Feature{
    id?:number;
    properties:unknown;                   //타입 미확정 시
}

function isBook(val:unknown): val is Book{
   return(
     typeof(val) === 'object' && val !== null && 'name' in val && 'author' in val 
   );
}

function processValue(val: unknown){
    if(isBook(val)){
        val;
    }
}

processValue({name:'Lee',author:'LOL'});





