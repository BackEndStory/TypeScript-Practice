

interface profile1{
    name?: string,
    age?:number,
    married?:boolean
};
// Required
const Infor4 : Required<profile1>={ name:'Lee', age:23, married:false};

// Required 원형

type R<T> = { [key in keyof T]-?:T[key]; };

//Readonly

const Infor5 : Readonly<profile1> = {
    name:'Lee',
    age:24,
    married:false
};

//Readonly원형
type R1<T> = { -readonly[key in keyof T]: T[key]; };

//Record
const a134 : Record<string,number> = { a:3,b:4,c:8};
//Record 원형
type  R2<T extends keyof any,S> = {[key in T]: S; };

//NonNullable
type A34 = string | null | number | undefined;
type B34 = NonNullable<A>;
//NonNullable 원형
type N<T> = T extends null | undefined ? never : T;


function zip(x:number, y:string, z:boolean):{ x:number, y:string, z:boolean}{
    return {x,y,z};
};

// Parameters
type params = Parameters<typeof zip>;
// Parameters 원형
type P<T extends (...args:any) => any> = T extends (...args: infer A) => any ? A:never;

// ReturnType
type Ret = ReturnType<typeof zip>;
// ReturnType 원형
type R5<T extends (...args:any) => any> = T extends (...args:any) => infer A ? A:never;

