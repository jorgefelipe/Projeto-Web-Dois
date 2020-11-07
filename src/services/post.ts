import { IUpdatePost, ICreatePost } from 'models/Post';

import api from './base';

const createPost = (body: ICreatePost) => api.post('/post', body);

const deletePost = (postId: string) => api.delete(`/post/${postId}`);

const updatePost = (values: IUpdatePost) =>
  api.put(`/post/${values.postId}`, values.body);

const getPost = () => api.get('/post');

export default {
  createPost,
  deletePost,
  updatePost,
  getPost
};
