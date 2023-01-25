type RecordingType = 'studio' | 'live';
interface Album {
    artist : string;
    title: string;
    releaseDate:Date;
    recording:RecordingType;
}

const albums : Album[] = [{artist:'3',title:'32',releaseDate:new Date('2023-09-23'), recording:'live'}];
type K = keyof Album;
// function pluck<T>(records:T[],key: keyof T): T[keyof T][] {
//     return records.map(r => r[key]);
// }
const releaseDates  =  pluck(albums,'releaseDate');  // 타입이 string, Date 두 개가 나옴


function pluck<T, K extends keyof T>(records:T[],key: K): T[K][] {
    return records.map(r => r[key]);
}
const releaseDates2 = pluck(albums, 'releaseDate');
