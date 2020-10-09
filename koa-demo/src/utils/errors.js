export default class AuthError extends Error{
    constructor(msg){
        super(msg)
        this.name = '鉴权错误'
    }
}

