function A5 () : void{
  return undefined;               // void타입에 undefined 대입 가능
}

function A6 (callback:void) : void {

}

const A6_1 = A6(undefined);

interface A7 {
    talk :() => void;                      // 함수 형식의 리턴 타입
}
const A7_1 : A7 = { talk(){ return 5 }};      // talk함수선언 후 리턴 타입 숫자
const A7_2 = A7_1.talk();                      // 타입 void 앞 줄 의미가 없음


function numOrstr(a:number|string){         // 타입 별 결과 추출
  if(typeof a === 'number'){
    console.log('number');
  }
  else{
    console.log('string');
  }
};

numOrstr('123');
numOrstr(23);

class A8{                              //클래스에서의 구분
  aaa(){};
}
class B8{
  bbb(){};
}
function aOrb(param:A8|B8){
  if(param instanceof A8){
    param.aaa();
  }
}

aOrb(new A8());

interface Cat{ meow:number};
interface Dog{bow:number};

function A9(a: Cat | Dog) : a is Dog{       //is 연산자
  if((a as Cat).meow){return false}
  return true
}

function pet(a:Cat|Dog){
  if(A9(a)){console.log(a.bow)}
  if('meow' in a){console.log(a.meow)}
}
