import fs from 'fs';
import path from 'path';
import Router from 'koa-router';

function createRouter(){
    const reg = /([^\.]+)\.js$/;
    const globalRouter = new Router();
    fs.readdirSync(__dirname).forEach((file)=>{
        const filePath = path.join(__dirname,file);
        if(file !== 'index.js' && fs.statSync(filePath).isFile() && reg.test(file)){
            const router = require(filePath);
            const routerName = reg.exec(file) && reg.exec(file)[1];
            globalRouter.use(`/${routerName}`,router.routes(),router.allowedMethods())
        }
    });
    return globalRouter
}

const router = createRouter();
export default router