const pt = { x:3,y:4};
const id = {name:'LEe'};
const namedPoint = {...pt, ...id};   // 객체 전개 연산자
namedPoint.name;

declare let hasMiddle : boolean;
const firstLast = { first:'Harry', last:'Truman'};
const president = {...firstLast, ...(hasMiddle?{middle:'S'}:{})};