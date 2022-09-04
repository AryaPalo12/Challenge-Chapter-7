const { Posts } = require('../database/models');
const { Op } = require('sequelize')

//Create new post
const createPost = async (title, imageUrl, body, user_id) => {
  return await Posts.create({
    title,
    imageUrl,
    body,
    user_id
  });
}

//Aditional function for sort search and pagination
const getPostAditional = async (search, sort, page, limit) => {
  const founded = await Posts.findAll({ offset: page, limit: limit, where: {
    title: {
      [Op.iLike]: `%${search}%`,
    }
  },order:[
    ['title',sort],
  ]},{ })
  return founded;
}

const getPostByWriter = async (user_id) => {
  return await Posts.findAll({ where: {user_id}, raw: true})
}

const getSinglePost = async (postId) => {
  return await Posts.findOne({ where: {id: postId}, raw: true})
}

//Repo function to find post to update
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
      imageUrl,
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
  getPostByWriter,
  getPostAditional,
  getSinglePost,
}

module.exports = postRepo;