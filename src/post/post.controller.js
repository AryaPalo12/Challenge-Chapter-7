const postServices = require("./post.service");
const jwt = require('jsonwebtoken');

const getPost = async (req, res) => {
  const params = req.params
  try {
    if (params.userId != undefined) {
      const postfound = await postServices.getPostByWriter(params.writerId);
      return res.json(postfound)
    } else {
      const allpost = await postServices.getAllPost();
      return res.json(allpost);
    }
  }
  catch (error) {
    res.status(404).send('Post not found')
  }
}

const createPost = async (req, res) => {
  const user_id  = req.auth.id;
  const { title, imageUrl, body } = req.body
  try {
    const createdPost = await postServices.createPost(title, imageUrl, body, user_id)
    return res.json(createdPost)
  }
  catch (error) {
    console.log(error)
    res.status(400).send('Bad Request')
  }

}

const updatePost = async (req, res) => {
  const user_id = req.auth.id;
  const postId = req.params.postId;
  const { title, imageUrl, body } = req.body
  try {
    const changedPost = await postServices.updatePost(postId, title, imageUrl, body, user_id);
    return res.status(200).json(changedPost);
  }
  catch
  {
    res.status(400).send('Bad Request')
  }

}

const postControllers = {
  getPost,
  createPost,
  updatePost
}

module.exports = postControllers;