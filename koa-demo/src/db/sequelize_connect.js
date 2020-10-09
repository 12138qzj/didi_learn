const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('shaoyi-test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// 测试连接是否成功
// try{
//     await sequelize.authenticate();
//     console.log('连接成功')
// }catch(error){
//     console.log(error)
// }

//关闭连接

// sequelize.close()

// 定义model方法一
const User = sequelize.define('user', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户名',
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户名'
    }
}, {
    freezeTableName: true,
})

// console.log(User === sequelize.models.User) // true

//定义model方法二 继承Model
// class User extends Model { }

// User.init({
//     user_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         comment: '用户名',
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         comment: '用户名'
//     }
// })

// 创建表 如果存在则不常见，否则进行创建
sequelize.sync()
//console.log(sequelize.models)


// 创建用户
const build = async () => {
    const tom = await User.create({
        user_name:'shaoyi',
        password:'123'
    })

    console.log(tom)
}
build()

//简单select查询
// const query = async () => {
//     const users = await User.findAll(
//         {
//             where: {
//                 id: 1
//             },
//             raw: true
//         }
//     );
//     console.log(users);
// }
// query()