
/* 53.타입스크립트 기능보다는 ECMAScript기능을 사용하기 */

enum Flavor{
    VANILLA = 0,
    CHOCOLATE = 1,
    STRAWBERRY = 2
}

let flavor = Flavor.CHOCOLATE;
   // flavor = 'strawberry';      Error
//console.log(Flavor[0]);


function scoop(flavor:Flavor){}

//scoop('villa');                 Error
scoop(Flavor.VANILLA);


type Flavor1 = 'vanilla' | 'chocolate' | 'strawberry';
let flavor1 : Flavor1 = 'chocolate';
  //  flavor1 = 'mint chip'     Error

 
class Person1 {
  name:string;
  constructor(name:string){
    this.name = name;
    console.log(name);
}
  }
  

class Person2{
  constructor(public name:string){
    console.log(this.name);
  }

}


class Greeter{
  greeting: string;
  constructor(message:string){
    this.greeting = message;
  }
  @logged
  greet(){
    return 'Hello,' + this.greeting;
  }
}

function logged(target:any,name:string,descriptor:PropertyDescriptor){
  const fn = target[name];
  descriptor.value = function(){
    console.log(`Calling ${name}`);
    return fn.apply(this,arguments);
  };
}
console.log(new Greeter('Dave').greet());



/* 54.객체를 순회하는 노하우 */

const obj3 = {
  one:'uno',
  two:'dos',
  three:'tres'
};
let k : keyof typeof obj3;
for(k in obj3){
 // console.log(k);
  const v  = obj3[k];                               // k는 string 타입이지만 obj의 키 타입은 one,two,three일 뿐이므로 오류 발생 Error
}

interface ABC {
  a:string;
  b:string;
  c:number;
  d:undefined
}


function foo1(abc:ABC){                                         // 방법1 keyof 사용
  let k : keyof ABC; 
  for(k in abc){
    const v = abc[k];
  }
}

function foo2(abc:ABC){                                        // 방법2 Object.entries() 사용
  for(const [k,v] of Object.entries(abc)){
    k
    v
  }
}

const x23 ={ a:'a', b:'b', c:2, d:undefined};
foo1(x23);
