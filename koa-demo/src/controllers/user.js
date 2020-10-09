import UserDAO from '../daos/user';

class UserController {
    constructor() {
        this.userDAO = new UserDAO()
    }
    //获取单个user
    async get(ctx) {
        const { userId } = ctx.params;
        const user = await this.userDAO.getUserById(userId);
        return user
    }
    // 获取批量action
    async list(ctx) {
        console.log(ctx.state)
        const result = await this.userDAO.list();
        return result
    }
    // 创建action
    async create(ctx) {
        console.log(ctx.request.body);
        const params = ctx.request.body;
        const instance = await this.userDAO.create()
        return instance
    }
    // 更新action
    async update() {
        return '更新action'
    }
    //删除action
    async delete() {
        return '删除action'
    }

    get schema(){
        return {
            get:{
                userId:{
                    type:'number',
                }
            },
            list:{

            },
            create:{

            },
            update:{

            },
            delete:{

            }
        }
    }
}

export default new UserController()