import sequelize from './connect';

class Model{
    constructor(){
        const baseModel = sequelize.define(this.tableName || this._getModelName(),this.model || {},{
            freezeTableName: true,
        })

        return baseModel
    }
    _getModelName(){
        return this.constructor.name.toLowerCase()
    }
}

export default Model