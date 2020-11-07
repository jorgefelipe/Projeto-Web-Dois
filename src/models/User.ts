export interface IUser {
  name: string;
  email: string;
  photoUrl?: string;
}

export interface INewUser extends IUser {
  password: string
}
