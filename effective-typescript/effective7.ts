
/* 54.타입스크립트 기능보다는 ECMAScript기능을 사용하기 */

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
