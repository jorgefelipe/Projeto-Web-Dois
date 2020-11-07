import { AnyAction } from 'redux';

import { IPost, IUpdatePost } from 'models/Post';

const postTypes = {
  SET_POSTS: 'post/ set posts',
  UPDATE_POST: 'post/update post',
  DELETE_POST: 'post/ delete post',
  SET_NEW_POST: 'post/ set new post',
};

export interface PostState {
  postList: IPost[];
}

const initialState: PostState = {
  postList: [],
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case postTypes.SET_POSTS:
      return { ...state, postList: action.payload };

    case postTypes.UPDATE_POST: {
      const payload = action.payload as IUpdatePost;
      const indexpost = state.postList.findIndex(
        (post) => post._id === payload.postId
      );
      const posts = state.postList;
      posts[indexpost].description = payload.body.description;
      posts[indexpost].title = payload.body.title;
      posts[indexpost].photoUrl = payload.body.photoUrl;

      return { ...state, postList: posts };
    }

    case postTypes.DELETE_POST: {
      const indexpost = state.postList.findIndex(
        (post) => post._id === action.payload
      );
      const posts = state.postList;
      posts.splice(indexpost, 1);
      return { ...state, postList: posts };
    }

    case postTypes.SET_NEW_POST: {
      const posts = state.postList;
      posts.push(action.payload);
      return { ...state, postList: posts };
    }
    default:
      return state;
  }
}

export const setNewPost = (values: IPost) => ({
  type: postTypes.SET_NEW_POST,
  payload: values,
});

export const deletePost = (id: string) => ({
  type: postTypes.DELETE_POST,
  payload: id,
});

export const updatePost = (values: IUpdatePost) => ({
  type: postTypes.UPDATE_POST,
  payload: values,
});

export const setPosts = (values: IPost[]) => ({
  type: postTypes.SET_POSTS,
  payload: values,
});
