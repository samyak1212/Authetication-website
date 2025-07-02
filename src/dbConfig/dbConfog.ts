import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Mongodb connected sucessfully");
        });

        connection.on("error", (err) => {
            console.log("MongoDb connection error ", err);
            process.exit();
        });
    } catch (error) {
        console.log("Something went wrong in mongo db connection", error);
    }
}
