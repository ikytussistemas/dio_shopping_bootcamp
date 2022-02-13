export type UserType = {
  _id?: any;
  userName: string;
  fullName: string;
  password: string;
  email: string;
  type: string;
}

export type UserResponseType = {
  _id?: any;
  userName: string;
  fullName: string;
  email: string;
  type: string;
}

export type UserLoginType = {
  username: string;
  password: string;
}