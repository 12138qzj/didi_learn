import {DataTypes} from 'sequelize';
import BaseModel from '../db/model';

class User extends BaseModel{
    constructor(){
        super()
    }
    get model(){
        return {
            user_name:{
                type:DataTypes.STRING,
                allowNull: false,
                comment:'用户名',
                unique:true
            },
            password:{
                type:DataTypes.STRING,
                allowNull: false,
                comment:'用户名'
            },
        }
    }
    // 自定义tableName
    get tableName(){
        return
    }
}

export default new User()