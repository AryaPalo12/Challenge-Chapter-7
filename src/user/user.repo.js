const { User } = require('../database/models')

const createUser = async (object) => {
  const { fullname, email, password } = object;
  const oldUser = await User.findAll({
    where: { email }
  });
  if (!oldUser.length) {
    const createdUser = await User.create({
      fullname,
      email,
      password
    })
    return createdUser;
  }
  else {
    return { message: "Email has been used before" }
  }
}

const editUser = async (object) => {
  const { fullname, password } = object;
  const editedUser = await User.update({ fullname, password }, {
    where: {
      user_id
    }
    /* this will be the sorting method
     order: [
            ['id', 'DESC'],
            ['fullname', 'ASC'],
        ]
    */
  });
  return editedUser;
}


const userRepos = {
  createUser,
  editUser
};

module.exports = userRepos;