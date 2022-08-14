const userServices = require("./user.service");

const createUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const object = {
    fullname,
    email,
    password
  }
  console.log(object)
  try {
    const createdUser = await userServices.createUser(object);
    return res.status(200).json(createdUser);
  }
  catch {
    res.status(500).send('User creation failed');
  }
}

const editUser = async (req, res) => {
  const { user_id } = req.auth.user_id;
  const { fullname, email, password } = req.body;
  const object = {
    fullname,
    email,
    password
  }
  try {
    const editedUser = await userServices.editUser(object);
    return res.status(200).send(editedUser)
  }
  catch{
    res.status(400).send('Bad Request');
  }
}

const userControllers = {
  createUser,
  editUser,
};

module.exports = userControllers;