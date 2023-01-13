import { Expression } from "typescript";
import  express,{Request, Response, NextFunction}  from 'express';


interface Error {
  code?: number;
  message?:string;
} 


const app = express();
app.set('port', 3001);
app.set('view engine', 'html');



app.use(express.json());  //bodyparser
app.use(express.urlencoded({ extended: false }));



app.use((req:Request, res: Response , next) => {
  const error : Error=  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.code = 404;
  next(error);
});

app.use((err:Error, req :Request, res : Response, next:NextFunction) => {
  
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.code || 500);
  res.render('error');
});
app.get("/",(res:Response,req:Request)=>{

});
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});