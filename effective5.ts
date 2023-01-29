
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

