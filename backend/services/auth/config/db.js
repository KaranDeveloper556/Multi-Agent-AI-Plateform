import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connect");
    } catch (error) {
        console.log("Error in connecting database" + error);
    }
};

export default connectdb;