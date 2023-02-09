
/* 59.타입스크립트 도입 전에 @ts-check와 JSDoc으로 시험해보기 */

// @ts-check
/**
 * 엘리먼트의 크기(픽셀 단위)를 가져옵니다
 * @param {Element} el 해당 엘리먼트     //{Node} Error
 * @return {{w:number, h:number}} 크기
 */
function getSize(el){
    const bounds = el.getBoundingClientRect();
    return {w:bounds.width, h:bounds.height};        // return 타입 맞추기 Error
}


// @ts-check
/**
 * @param {number} val 
 */
function double(val){
    return 2*val;
}

/**
 * 
 * @param {{files:{forEach:(arg9:(file:any) => Promise<void>)=> void;}}} data 
 */
function loadData(data){
    data.files.forEach(async file => {     
    });
}


/* 61.의존성 관계에 따라 모듈 단위로 전환하기 */

class Greeting2{
  
    constructor(name){
        this.greeting = 'Hello';
        this.name = name;
    }
    greet(){
        return this.greet + '' +this.name;
    }
}


const state2 = {};
state2.name = 'New York';
state2.capitial = 'Albany';


