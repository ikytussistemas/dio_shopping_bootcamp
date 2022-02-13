import cors from 'cors';
import express, { Response } from 'express';

import MongoConnection from './database/mongoConnection';
import { MessageRoutes, ProductRoutes, UserRoutes} from './routes';
import { errorHanddlerMiddleware } from './middleware';
import { autorizationRouter } from './routes/authorization.routes';
import { initMessages, initProducts, initUsers } from './database/initData.config';

class application {
  public app = express.application;

  public constructor() {
    this.app = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }
  
  private async database(){
    MongoConnection();
    //initUsers();
    //initProducts();
    //initMessages();
  }

  private routes(): void {
    this.app.get('/', (res: Response) => {
      res.status(200).json({ msg: 'Seja bem-vindo ao sistema!' });
    })
    this.app.use(autorizationRouter);
    this.app.use('/users', UserRoutes);
    this.app.use('/products', ProductRoutes)
    this.app.use('/messages', MessageRoutes)
    this.app.use(errorHanddlerMiddleware);
  }
}

export default new application().app;
