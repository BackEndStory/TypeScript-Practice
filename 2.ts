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