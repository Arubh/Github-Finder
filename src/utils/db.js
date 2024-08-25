import mongoose from "mongoose";

const connect = async () => {
  const MONGO='mongodb+srv://aditya2108raj:RqhXjWFhZUgTzdiq@cluster0.qwshf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  try {
    await mongoose.connect(MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
 