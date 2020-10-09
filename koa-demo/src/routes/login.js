import Router from 'koa-router';
import jwt from 'jsonwebtoken';


const loginRouter = new Router();


loginRouter.post('/', async (ctx) => {
    console.log(ctx.request.body);
    const userInfo = ctx.request.body;
    const {user,password} = userInfo;
    if((user && user==="root") && (password && password==="aaa")){
        const token = jwt.sign({
			userInfo:user
		}, 'my_token', { expiresIn: '2m' });
		return ctx.body = {
			code: '000001',
			data: token,
			msg: '登录成功'
		}
    }else{
        return ctx.body = {
			code: '000002',
			data: "用户名或密码错误",
			msg: '登录失败'
		}
    }
})


module.exports = loginRouter