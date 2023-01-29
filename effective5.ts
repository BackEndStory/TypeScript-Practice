
/* 38.any타입은 가능한 한 좁은 범위에서만 사용하기 */


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