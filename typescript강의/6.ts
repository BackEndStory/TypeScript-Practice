

interface Arr<T>{
    forEach(callback:(item : T)=>void): void;
   // forEach<T>(callback:(item : T)=>void): void;
    map<S>(callback:(v:T)=>S): S[];
    filter<S extends T>(callback:(v:T) => v is S):S[];
}

const a12 : Arr<number> = [1,2,3];
a12.forEach((item)=> {
    console.log(item);
    item.toFixed(1);
});
a12.forEach((item)=> {
    console.log(item);
    return '3';
});

const a13 = a12.map((v)=> v+1);
const a14 = a12.map((v)=> v.toString());
const a16 = a12.map((v)=> v%2 === 0);



const a17 : Arr<number | string> = [1,'2',3,'4',5];
const a18 = a17.filter((v): v is string => typeof v === 'string');
