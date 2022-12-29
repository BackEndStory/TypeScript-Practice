// function add3(x:number | string , y: number ): number | string
// { return x+y};      //Error
const result : number | string = add(1,2);


type A = {hell : 'word'} & {lo: 'lol'};
const a3 : A = {hell: 'word', lo:'lol'}


type animal = { name:string};
type poyouyu = animal & { breed: string};
type marsh = poyouyu & { think : string};
const duck : marsh = { name: 'molla', breed:'ea', think:'lol'};

interface A1 {
    name:boolean
};
interface B1 extends A1{
    breed:boolean
};
interface C1 extends B1{
    think:boolean
};
const ABC : C1 = { name:true, breed:true, think:true};



type A3 = { name : string };
type B3 = {age: number};
type D3 = A3 & B3;
type C3 = {name:string, age:number};
const c : D3 = {name:"lee", age:23};   //Error 큰 타입에서 작은 타입으로 들어가려하기 때문

const obj1 = {name:'ju', age:45, married:false};
const e :C3 = obj1;

//const e1:C3={name:'ju', age:45, married:false};  //Error 잉여속성검사




interface A4 { name: string};
interface B4 {age:number};
interface C4 extends A4, B4{};
const c3 : C4 = { name:'lee', age:24};


const list: [number, number] = [1,2];

const tuple : [number, number] = list;


type Tuple = [string, Date, string];
type TupleEl = Tuple[1];


interface Person{
    first:string;
    last:number;
}

//const p : Person = {first:'Jane', last:'Jacobs'};
//const first: Person['last'] = p['last'];


