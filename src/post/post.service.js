const postRepo = require("./post.repo");

const createPost = async (title, imageUrl, body, user_id) => {
  return await postRepo.createPost(title, imageUrl, body, user_id);
}

const getPostByWriter = async (user_id) => {
  return await postRepo.getPostByWriter(user_id)
}

const getAllPost = async () => {
  return await postRepo.getAllPost();
}

const updatePost = async (id, title, imageUrl, body, user_id) => {
  const postFound = await postRepo.getOnePost(id);
  if(postFound['user_id'] != user_id){
    return {message: "403 Forbidden, user not authorized to edit this post."}
  }
  return await postRepo.updatePost(id, title, imageUrl, body);
}

const postServices = {
  createPost,
  getPostByWriter,
  getAllPost,
  updatePost

}

module.exports = postServices;