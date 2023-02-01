

/* 33.string 타입보다 더 구체적인 타입 사용하기 */
type RecordingType = 'studio' | 'live';
interface Album {
    artist : string;
    title: string;
    releaseDate:Date;
    recording:RecordingType;
}
//declare const album : Album[];
const albums : Album[] = [{artist:'3',title:'32',releaseDate:new Date('2023-09-23'), recording:'live'}];
type K = keyof Album;
// function pluck<T>(records:T[],key: keyof T): T[keyof T][] {
//     return records.map(r => r[key]);
// }
const releaseDates  =  pluck(albums,'releaseDate');  // 타입이 string, Date 두 개가 나옴


function pluck<T, K extends keyof T>(records:T[],key: K): T[K][] {
    return records.map(r => r[key]);
}
const releaseDates2 = pluck(albums, 'releaseDate');


/* 34.부정확한 타입보다는 미완성 타입을 사용하기 */

type Expression4 = number | string | CallExpression;
type CallExpression = MatchCall | CaseCall | RGBCall;

interface MatchCall {
    0: '+' | '-' | '/' | '*' | '>' | '<';
    1: Expression4;
    2:Expression4;
    length:3;
}
interface CaseCall {
    0: 'case';
    1: Expression4;
    2:Expression4;
    3:Expression4;
    length:4|6|8|10|12|14|16;
}
interface RGBCall {
    0: 'rgb';
    1: Expression4;
    2:Expression4;
    3:Expression4;
    length:4;
}

const tests: Expression4[] = [
    10,
    "red",
    ["+",10,5],
    ["case",[">",20,10],"red","blue","green","yellow"],
    ['rgb',1,2,3],
]

/* 37. 공식 명칭에는 상표를 붙이기 */

type AbsolutePath = string & {_brand: 'abs'};
function listAbsolutePath(path:AbsolutePath){};
function isAbsolutePath(path:string): path is AbsolutePath{
    return path.startsWith('/');
};

function f(path:string){
    if(isAbsolutePath(path)){
        listAbsolutePath(path);
    }
   // listAbsolutePath(path);
}
f('/user/dm');


interface Vector2D{
    _brand: '2d';
    x:number;
    y:number;
}

function vex2D(x:number, y:number):Vector2D{
    return {x,y,_brand:'2d'};
}
function calculateNorm(p:Vector2D){
    return Math.sqrt(p.x * p.x + p.y * p.y);
}
calculateNorm(vex2D(3,4));
const vex3D = {x:3,y:4,z:1};
//calculateNorm(vex3D);



