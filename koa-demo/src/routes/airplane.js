import Router from 'koa-router';

const airPlaneRouter = new Router();

airPlaneRouter.get('/',(ctx)=>{
    ctx.body = ctx.method +'airplane'
})
airPlaneRouter.post('/',(ctx)=>{
    ctx.body = ctx.method +'airplane'
})
airPlaneRouter.put('/',(ctx)=>{
    ctx.body = ctx.method +'airplane'
})
airPlaneRouter.patch('/',(ctx)=>{
    ctx.body = ctx.method +'airplane'
})
airPlaneRouter.del('/',(ctx)=>{
    ctx.body = ctx.method +'airplane'
})

module.exports =  airPlaneRouter