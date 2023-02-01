const pt = { x:3,y:4};
const id = {name:'LEe'};
const namedPoint = {...pt, ...id};   // 객체 전개 연산자
namedPoint.name;

declare let hasMiddle : boolean;
const firstLast = { first:'Harry', last:'Truman'};
const president = {...firstLast, ...(hasMiddle?{middle:'S'}:{})};


/* 타입 추론 문맥 */

type Language = 'JAVASCRIPT' | 'TYPESCRIPT' | 'PYTHON';
function setLanguage(language: Language){};

let language = 'JAVASCRIPT';
//setLanguage(language);  //Error type is string

// =>>  solution
let language1 : Language = 'JAVASCRIPT';
setLanguage(language1);

const language2 = 'JAVASCRIPT';
setLanguage(language2);

// tuple 
function pan( where: readonly [number,number]){};

const loc = [10,20];
//pan(loc);  //Error

// ==> solution
const loc1 : [number,number] = [10,20];
pan(loc1);

const loc2 = [10,20] as const;
pan(loc2);  //function fix readOnly

// object
type Language1 = 'JAVASCRIPT' | 'TYPESCRIPT' | 'PYTHON';
interface Gover{
    language:Language1,
    organization:string,
}
function complain(language:Gover){};
const ts = { 
    language:'PYTHON',
    organization:'Micro'
};
//complain(ts); //Error

// ==> soluction
const ts1 = { 
    language:'PYTHON',
    organization:'Micro'
}  as const ;
complain(ts1);




