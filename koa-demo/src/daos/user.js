import UserModel from '../models/user'

class UserDao{
    async create(ctx){
        //console.log(ctx.request.body)
        // const instance = await UserModel.create(params);
        // return instance
        return 'hello'
    }

    async getUserById(userId){
        const queryResult = await UserModel.findAll({
            where:{
                id:userId
            }
        },{
            raw:true
        })
        return queryResult
    }
    async list(){
        return await UserModel.findAll({
            raw: true
        })
    }

    async delete(){}
}

export default UserDao