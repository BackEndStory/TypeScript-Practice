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