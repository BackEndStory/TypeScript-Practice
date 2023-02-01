import { Expression } from "typescript";
import  express,{Request, Response, NextFunction, RequestHandler, ErrorRequestHandler}  from 'express';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';


const app = express();
app.set('port', 3001);
app.set('view engine', 'html');
app.use(express.json());  //bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('SECRET'));
app.use(session({
  secret:'SECRET'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req:Request, res: Response , next) => {
  const error : Error=  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.code = 404;
  next(error);
});

const errorMiddleware: ErrorRequestHandler = (err:Error,req,res,next)=>{
  console.log(err.status);
}
app.use(errorMiddleware);




app.use((err:Error, req :Request, res : Response, next:NextFunction) => {
  req.body;
  req.params
  res.json
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.code || 500);
  res.render('error');
});


const middleware : RequestHandler<{paramType:string},{message:any},{bodyType:string},{queryType:number},{localType:unknown}>  = (req,res,next) =>{
  req.params.paramType;
  res.send({message :' hello'});
  req.body.bodyType;
  req.query.queryType;
  res.locals.localType;
}





app.get("/",(res:Response,req:Request)=>{

});
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});