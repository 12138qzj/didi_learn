module.exports = function (app) {
    const userList = require('../controllers/user');


    // userList Routes
    app.route('/users/:userId')
    .get(userList.readUser)
    .put(userList.updateUser)
    .delete(userList.deleteUser);
    
    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createUser);

   
};