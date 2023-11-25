import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('MongoDB connected');
  } catch (error) {
    console.log("erro occurs", error)
  }
};

export default connect;