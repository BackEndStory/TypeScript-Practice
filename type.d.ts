
  declare global {
    
    interface Error {
        code?: number;
        status?:string;
        message?:string;
      } 
    namespace Express {
      export interface Request{
        message:'OK'
      }
    }

   interface UserData{
    firstName:string;
    lastName:string;
   }

   declare let user:UserData;


  }
  //declare module 'my-module';
  export {}
  