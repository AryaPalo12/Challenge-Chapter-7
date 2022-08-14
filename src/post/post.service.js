const postRepo = require("./post.repo");

//Will create a new post
const createPost = async (title, imageUrl, body, user_id) => {
  return await postRepo.createPost(title, imageUrl, body, user_id);
}

//Will get post using the writerId as the parameters
const getPostByWriter = async (writerId) => {
  return await postRepo.getPostByWriter(writerId)
}

//Will get all post listed
const getAllPost = async () => {
  return await postRepo.getAllPost();
}

//This function will use offset and limit function to use as pagination
//Trying to create own pagination than using the npm 
const getPostAditional = async ( search='', sort='DESC', page=0, limit = 20) => {
  if(page > 0 ){
    page = parseInt(limit)*(parseInt(page)-1);
  }
  const filteredPosts = await postRepo.getPostAditional(search, sort, page, limit);
  if(!filteredPosts.length){
    return ({ message: 'Page does not exist / No post in this page' });
  }
  return filteredPosts;
}

//Update the post if the poster is the same as the one in the user login
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
  updatePost,
  getPostAditional,
}

module.exports = postServices;