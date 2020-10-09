import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('shaoyi-test','root','root',{
    host:'localhost',
    port:'3306',
    dialect:'mysql',
})

export default sequelize