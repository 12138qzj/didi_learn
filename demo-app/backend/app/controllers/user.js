const userListRepository= require("../repositories/user")



exports.listAllUsers = function(req, res) {
  const userList = userListRepository.listAllUsers(req);
  setTimeout(()=>{res.json(userList)},2000)
};
 
exports.createUser = function(req, res) {
  userListRepository.createUser(req);
  res.status(201).end();
};
 
exports.readUser = function(req, res) {
  const user = userListRepository.readUser(req);
  res.json(user);
};
 
exports.updateUser = function(req, res) {
  const user = userListRepository.updateUser(req);
  res.json(user);
};
 
exports.deleteUser = function(req, res) {
  const result = userListRepository.deleteUser(req);
  res.json({ message: result });
};
