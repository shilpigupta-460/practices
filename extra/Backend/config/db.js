import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const con = await mongoose.connect(process.env.DB_URL,
            { useNewUrlParser: true })

        console.log(` connected to DB at ${con.connection.host}`);

    }
    catch (err) {
        console.log({ message: err.message });
    }
}
export default connectDB;