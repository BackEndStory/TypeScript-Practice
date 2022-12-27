// {}, Object => 객체타입 x , 모든타입

interface A9{
    readonly a:string;
    b:string;
}
const aaaa:A9 = { a:'str', b:'war'}
aaaa.a = 'Onln Read';

type A10 = {[key:number]:number};
const a10 : A10 = {  45:34, "4":45};

type A11 ='Human' | 'Animal' | 'Swing';
type A12 = { [key in A11]:number};
const bbbb:A12 = { Human:34, Animal:45, 'Swing':56};

//옵셔널

function add(x:number, y?:number, z?:number):number{return x};

add(1);
add(1,2);
add(1,2,4);

class A13{
    a3:string;
    b3:number;
    constructor(a3:string, b3:number=123){
        this.a3 = a3;
        this.b3 = b3;
    }
    method(){}   
};
type AA = A;
const a15 : A13 = new A13('123');
const b15 : typeof A13 = A13;


function add<T>(x:T,y:T):T{ return x;};
// 1. 제네릭 타입에 제한두기
function add<T extends string>(x:T,y:T){ return x;};

// 2. 제네릭 여러 개 사용
function add<T extends number, K extends string>(x:T,y:T){return x; };


 

