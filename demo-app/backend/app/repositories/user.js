const { User } = require("../models/user");

let currentId = 0;

class UserListRepository {
  constructor() {
    const User1 = new User(++currentId, "User1", "User1 desc");
    const User2 = new User(++currentId, "User2", "User2 desc");
    User1.isFinished = true;
    this.UserList = [User1, User2];
    this.pageSize = 2;
  }

  listAllUsers(req) {
    //实现查看所有Users的方法
    const currPage = Number(req.query.page || 1);
    const data = this.UserList.slice(this.pageSize * (currPage - 1), currPage * this.pageSize)
    return {
      data,
      currPage,
      pageSize: this.pageSize,
      total: this.UserList.length 
    }
  }

  readUser(req) {
    //实现通过id查看具体User的方法
    const id = Number(req.params.userId);
    console.log(id)
    const user = this.UserList.filter(user => user.id === id);
    return {
      data: user
    };
  }

  createUser(req) {
    //实现创建新User纪录的方法
    const userInfo = req.body;

    const user = new User(++currentId, userInfo.name, userInfo.description);

    this.UserList.push(user);
    return {
      data: user
    }
  }

  updateUser(req) {
    //实现通过id和一个更新对象来更新User纪录的方法
    const id = Number(req.params.userId)
    const content = req.body;
    for (let i = 0; i < this.UserList.length; i++) {
      if (this.UserList[i].id === id) {
        this.UserList[i].name = content.name;
        this.UserList[i].description = content.description;
        return this.UserList[i]
      }
    }

  }

  deleteUser(req) {
    //实现通过id来删除User纪录的方法
    const id = Number(req.params.userId);
    let target=null;
    this.UserList.forEach((item, index) => {
      if (item.id === id) {
        target = index;
      }
    });
    //console.log(target)
    if (target!==null) {
      this.UserList.splice(target, 1);
      return 'success'
    } else {
      return 'fail'
    }
  }
}

module.exports = new UserListRepository();
