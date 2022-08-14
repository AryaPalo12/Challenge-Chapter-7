const { where } = require('sequelize/types');
const { Posts } = require('../database/models');

const createPost = async (title, imageUrl, body, user_id) => {
  return await Posts.create({
    title,
    image_url: imageUrl,
    body,
    user_id
  });
}

const getPostByWriter = async (user_id) => {
  return await Posts.findAll({ where: {user_id}, raw: true})
}

const getOnePost = async (id) => {
  return await Posts.findOne({ where: { id }, raw: true })
}

const getAllPost = async () => {
  return await Posts.findAll();
}

const updatePost = async (id, title, imageUrl, body) => {
  return await Posts.update(
    {
      title,
      image_url: imageUrl,
      body
    },
    {
      where: {
        id
      }
    }
  )

}

const postRepo = {
  createPost,
  getOnePost,
  getAllPost,
  updatePost,
  getPostByWriter
}

module.exports = postRepo;