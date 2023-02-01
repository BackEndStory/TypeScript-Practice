declare function a20(x:string):number;
type a21 = (x:string) => number | string;    // 공변성
                                             // 리턴 타입이 좁은 범위에서 큰 범위로 들어갈 수 있음
const A20 : a21 = a20;

//----------------------------------------------------------------------------------------
declare function a22(x:string | number ):number;
type a23 = (x:string) => number ;            // 반공변성
                                             // 매개변수 타입이 큰 범위에서 좁은 범위로 들어갈 수 있음
const A21 : a23 = a22;


//오버로딩

declare function a25(x:number, y:number, z:number):number;
declare function a25(x:number, y:number):number;


// =>>>

declare function a25(x:number, y:number, z?:number):number;  //옵셔널로 대체 할 수 있음





