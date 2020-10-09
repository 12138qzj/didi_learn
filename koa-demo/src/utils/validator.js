import schema from 'async-validator';
import AuthError from './errors';



export default function validate(descriptor,params){
    const validator = new schema(descriptor);
    // validator.validate(params).catch((err)=>{
    //     console.log(err);
    // });
    throw new AuthError('验证出错');
}