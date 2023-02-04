/* 47.공개 API에 등장하는 모든타입을 익스포트하기 */

interface SecretName{
    first:string;
    last:string
}

interface ScretSanta{
    name:SecretName;
    gift:string;
}

export default function getGift(name:SecretName, gift: string): ScretSanta {
    return {
        name:{
            first:'Lee',
            last:'KOK'
        },
        gift:'lol'
    }
};
//export { SecretName, ScretSanta}  
// => effective5.ts


/* 48.API주석에 TSDoc 사용하기 */

/** 
 * 인사말을 생성합니다. 
 * @param 인사할 사람의 이름 
 * @param 그 사람의 칭호
 * @returns 사람이 보기 좋은 형태의 인사말
 */
function greetJSDoc(name:string,title:string){
    return `Hello ${title}`;
}

/** 
 * 이 _interface_는 **세 가지** 속성을 가집니다.
 * 1. x
 * 2. y
 * 3. z
 */
interface Vector3D{
    x:number;
    y:number;
    z:number;
}

/** 특정 시간과 장소에서 수행된 측정 */
interface Measurement{
    /** 어디에서 측정되었나? */
    position:Vector3D;
    /** 언제 측정되었나? epoch에서부터 초 단위로 */
    time:number;
}

/* 49.콜백에서 this에 대한 타입 제공하기 */

class C{
    vals = [1,2,3];
    logSquares(){
        for(const val of this.vals){
            console.log(val*val);
        } 
    }
}

// const c = new C();
// c.logSquares();

const c = new C();
const CC = c.logSquares;
CC.call(c);

declare function makeButton(props:{text:string,onCLick:()=>void}):void;

// class ResetButton {
//     // constructor(){
//     //     this.onClick = this.onClick.bind(this);
//     // }
//     render(){
//         return makeButton({text:'Reset', onCLick:this.onClick});
//     }
//     onClick = () => {
//         alert(`Reset ${this}`);
//     }
// }

class ResetButton {
    constructor(){
        var _this = this;
        // this.onClick = function() {
        //     alert('Reset'+ _this);
        // };
    }
    // render(){
    //     return makeButton({text:'Reset', onCLick:this.onClick});
    // }
    
}

/* 50.오버로딩 타입보다는 조건부 타입을 사용하기 */

//function double(x:number | string) : number | string;

/** 제네릭 사용하여 구체적 타입 만들기 */
//function double<T extends string | number>(x:T):T;

// function double(x:number):number;
// function double(x:string):string;

/** 삼항 연산자와 제네릭을 사용하여 가장 정교하게 함수타입 만들기 */
//function double<T extends string | number>( x: T): T extends string ? string:number{ return x;};
//function double(x:any){ return x;}

// const num = double(12);
// const str = double('x');


// function f(x:number|string){
//     return double(x);
// }



