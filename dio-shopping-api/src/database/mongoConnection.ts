import "dotenv/config";
import mongoose from "mongoose";

class MongoConnection {
  public connection(): void {
    mongoose
      .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clkdmy.gjziw.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
      )
      .then(() => console.log("Data Base connection ok!"))
      .catch((error) => console.log(error));
  }
}

export default new MongoConnection().connection;
