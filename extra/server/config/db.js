import mongoose from "mongoose";


const connectDB = async () => {

    try {
        const con = await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
        console.log(` DB connected with ${con.connection.host}`);

    }
    catch (err) {

        console.log(err);
    }
}
export default connectDB;