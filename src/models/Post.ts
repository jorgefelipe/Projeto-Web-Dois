export interface IPost {
  _id: string;
  title: string;
  description: string;
  photoUrl?: string;
  createdAt: string;
}

export interface ICreatePost {
  title: string;
  description: string;
  photoUrl?: string;
}

export interface IUpdatePost {
  postId: string;
  body: ICreatePost;
  photoUrl?: string;
}
