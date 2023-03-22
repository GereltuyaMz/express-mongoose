import mongoose from "mongoose";

const connectMongoDB = async (connectionStr) => {
  try {
    const db = await mongoose.connect(connectionStr);
    console.log(`Mongo Database connected successfully: ${db.connection.host}`.bgGreen)
  } catch (error) {
    console.log("There is been error in connecting with mongo", error);
  }
}

export default connectMongoDB;