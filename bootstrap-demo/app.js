const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(static(path.join(__dirname,'./client')));

console.log(path.join(__dirname,'./client'))
// 监听端口≈
app.listen(3000,function(){
    console.log('启动成功');
    console.log("http://localhost:3000")
});