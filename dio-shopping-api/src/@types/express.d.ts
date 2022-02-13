import UserType from '../models/types/UserType';

declare module 'express-serve-static-core' {

  interface Request {
    user?: UserType
  }

}