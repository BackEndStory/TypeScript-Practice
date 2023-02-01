

interface profile{
    name:string,
    age:number,
    married:boolean
};
//Partial
const Infor1 : Partial<profile> = { name:'Lee', age:23};       

// Partial 원형 => type P<T> = { [key in keyof T]? : T[key]; };


// Pick
const Infor2 : Pick<profile, 'name'> = { name:'Lee'};

 //Pick 원형 => type P<T, S extends keyof T> = { [key in keyof S] : S[key]; };

 // Omit

 const Infor3 : Omit<profile, 'name' | 'married'> = { age: 34};

 // Omit 원형 => type O<T,S> = Pick<T , Exclude<keyof T,S>>
 //  type A45 = Exclude< keyof profile, 'married'>


//  type Exclude<T,U> = T extends U ? never : T;
//  type Extract<T,U> = T extends U ? T : never;

 type Animal = 'Cat' | 'Dog' | 'Human';
 type Mamal = Exclude<Animal, 'Human'>;      // Cat, Dog
 type Human= Extract<Animal, 'Human'>;        // Human

