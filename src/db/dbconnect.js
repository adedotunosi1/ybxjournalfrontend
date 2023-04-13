import { Mongoose } from "mongoose";

const dbConnect = () => {
  Mongoose
  .connect(
      process.env.DB_URL
      )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

}
 
export default dbConnect;