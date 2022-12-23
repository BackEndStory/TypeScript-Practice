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
