
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
  }
  //declare module 'my-module';
  export {}
  