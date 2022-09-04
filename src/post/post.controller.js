const postServices = require("./post.service");

const getAllPost = async (req,res) => {
  const { search, sort, page, limit } = req.query;
  try {
    if(search || sort || page || limit){
      const queriedPost = await postServices.getPostAditional(search, sort, page, limit);
      return res.json(queriedPost)
    } else {
      const allpost = await postServices.getAllPost();
      return res.json(allpost);
    }
  }  catch (error) {
    res.status(404).send('Post not found')
  }
}

const getPostByWriter = async (req, res) => {
  const writerId = req.params.writerId;
  try {
      const postfound = await postServices.getPostByWriter(writerId);
      return res.json(postfound)
    } 
  catch (error) {
    res.status(404).send('Post for this writer is not found')
  }
}

const getSinglePost = async (req, res) => {
  const postId = req.params.postId;
  try {
      const postfound = await postServices.getSinglePost(postId);
      return res.json(postfound)
    } 
  catch (error) {
    res.status(404).send('Post not found.')
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
  getAllPost,
  getPostByWriter,
  createPost,
  updatePost,
  getSinglePost,
}

module.exports = postControllers;