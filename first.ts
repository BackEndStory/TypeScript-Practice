const a : number = 5;
const b : string ="hello";
const c : boolean = false;
const a1 : 5 = 5;
const ab : any = 24; 
const ar1 : string[] = ['asdf'];
const ar2 : number[] = [23,2];          //배열
const ar3 : Array<number> = [34,43,34]; //제네릭
const ar4 : [number,number] = [4,5];     //튜플

function add(x: number, y:number): number { return x+y;}     
const add1 : (x:number, y:number) => number = (x,y) => x+y;

const sub : (x:number, y:number) => number = (x,y) => x+y;
type Add =  (x:number, y:number) => number;        //타입 에일리어스
const sub1 : Add = (x,y) => x+y;

interface de{                            //인터페이스
    (x:number,y:number):number;
}
const sub2 : de = (x,y) => x+y;


const x:number | null = null;

console.log(sub2(4,4));
const g  = '5';
let da = 12;
da = 'e' as unknown as number;


const enum EDirection{
    i=5,
    j,
    e,
    c,
}
const kl = EDirection.i;   //5
const kl2 = EDirection.e;   //7

function walk(dir:EDirection){

}
walk(EDirection.i);



const  EDire = {
    i1:5,
    j1:4,
    e1:6,
    c1:8,
} as const

type Direction = typeof EDire[keyof typeof EDire]
function run (dir:Direction){};
run(EDire.j1);


const obj = {a:'123', b:'45', c:'45'}

type key = keyof typeof obj;         //키 타입에 접근
type key1 = typeof obj[keyof typeof obj];  // 벨류 타입에 접근