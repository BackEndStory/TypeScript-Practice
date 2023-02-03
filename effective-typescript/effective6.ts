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