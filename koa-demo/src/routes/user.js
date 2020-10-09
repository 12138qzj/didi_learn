import Router from 'koa-router';
import userController from '../controllers/user';
import validate from '../utils/validator';


const userRouter = new Router();

userRouter.get('/', async (ctx) => {
    ctx.body = await userController.list(ctx)
})
userRouter.get('/:userId', async (ctx) => {
    // 获取验证器
    const descriptor = userController.schema.get;
    //获取参数
    const { params } = ctx;
    //进行验证
    validate(descriptor, params);

    //ctx.body = await userController.get(params.userId);
})
userRouter.post('/', async (ctx) => {
    ctx.body = await userController.create(ctx)
})
userRouter.put('/:userId', (ctx) => {
    ctx.body = userController.update(ctx)
})
userRouter.del('/:userId', (ctx) => {
    ctx.body = userController.delete(ctx)
})

module.exports = userRouter