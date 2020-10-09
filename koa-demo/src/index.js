import Koa from 'koa';
import koaBody from 'koa-body';
import koaStatic from 'koa-static';
import mount from 'koa-mount';
import onerror from 'koa-onerror';
import koaJwt from 'koa-jwt';
import router from './routes';
import User from './models/user';



// 连接数据库
User.sync();


const app = new Koa();

// onerror(app);

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
        ctx.body = {
                code: '000004',
                data: err.message,
                msg: '登录失败'
            };
    }
});
// jwt


app.use(koaBody({
    Multipart: true
}));

app.use(koaJwt({
	secret: 'my_token',
}).unless({
	path: [/\/login/]
}));

app.use(router.routes());

app.on("error", (err, ctx) => {//捕获异常记录错误日志
    console.log(new Date(), ":", err);
});

app.listen('3000');

