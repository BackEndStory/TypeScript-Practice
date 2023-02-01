import passport from 'passport';
import { Strategy } from 'passport-local';

export default () => {
    passport.use('local', new Strategy({
        usernameField: 'userId',
        passwordField:'password',
     
    }, async (userId, password, done)=>{
        try{
            return done(null,false,{message: '비밀번호가 틀림.'});
        }catch(err){
            console.error(err);
            return done(err);
        }
    }))
};