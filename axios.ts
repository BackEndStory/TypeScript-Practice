import axios, {AxiosError, AxiosResponse, CreateAxiosDefaults} from "axios";

interface Post {
  userId: number, id: number, title: string, body: string
}
interface created{}; 
interface Data{};
interface A45{
    get:<T=any,R=AxiosResponse<T>>(url:string) => Promise<R>;
    post:<T=any, R=AxiosResponse<T>, D=any>(url:string, data:D) => Promise<R>; 
};
(async() => {
  try {
     const a: A45 = axios;
     const response = await a.get<Post,AxiosResponse<Post>>('https://jsonplaceholder.typicode.com/posts/1');
     const response1 = await a.post<created, AxiosResponse<created>,Data>('https://jsonplaceholder.typicode.com/posts/1',{
        title:'foo',
        body:'bar',
        userId:1
    });
    //console.log(response.data.userId);
  } catch (error) { 
    if (axios.isAxiosError(error)) {
      console.log((error.response as AxiosResponse<{ message: string }>).data.message);
    }
    const errorResponse = (error as AxiosError<{ message: string }>).response
  }
})(); 