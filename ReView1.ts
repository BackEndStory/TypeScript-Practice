import { isConstructorDeclaration } from "typescript";

const d1 : string = 'Lee';
const d2 : number = 23;
const d3 : unknown = '34'
let d4 : undefined;
let d5 : null;
const d6 : boolean = true;
const d7 : any = 34;
const d8 : string[] = ['a','b']
const d9 : number[] = [1,2];
const d10 : [string,number,number] = ['a',1,2]
const d11 : Array<string> = ['1','2','3'];

type add1 = (x:number, y:number) => number;
const add11 : add1 = (x,y) => x;
interface Odd {
    (x:number,y:number) : number;
};
const add12 : Odd = (x,y) => x;
const obj2 : {name:string, age:number } = { name:'lee', age:23};

let ex ='a'  //자동 추론
//ex = 23

function add10(x:number,y:number):number{return x;};
// ===
type lol = 'robin' | 'rabi';
const lolli : lol = 'robin';

type lol1 = { name:'robin' }& { chara:'nabis' }& { skill:'curling'};
const lolli1 : lol1 = { name : 'robin', chara:'nabis', skill:'curling'};

const enum ED{
     we=3,
     ahrae=5,
     hope,
}
const DE1 = ED.we;

const OD = {
      we:'a',
      area:'b'
} as const

const DO = OD.we;

function Strage(x:number | string): void {
     if(typeof x == 'number'){
        console.log('number');
     }
     else{
        console.log('string');
     }
};
class AAA{
    aaa(){};
};
class BBB{
    bbb(){};
};
function Stage(param: AAA | BBB){
    if( param instanceof AAA){
        console.log("a");
    }
    else{
        console.log('b');
    }
};
function jenelic<T>(x:T,y:T):T{ return x};
function jenelic1<T extends string>(x:T,y:T):T{ return x};
function jenelic2<T extends string, K extends number>(x:T,y:K):T{ return x};


 


