const userRepos = require("./user.repo")
const bcrypt = require('bcrypt')
//require('dotenv').config(); salt with .env
const SALT = 10

const createUser = async (object) => {
  console.log(object)
  const hashedPassword = await bcrypt.hash(object.password, SALT)
  const newUser = {
    fullname: object.fullname,
    email: object.email,
    password: hashedPassword
  }
  const createdUser = await userRepos.createUser(newUser);
  return createdUser
}

const editUser = async (object) => {
  const editedUser = await userRepos.editUser(object);
  return editedUser;
}

const userServices = {
  createUser,
  editUser,
}

module.exports = userServices;