import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        
        connection.on("connected", () => {
            console.log("Connected to database");
        });

        connection.on("error", (err) => {
            console.log("Error connecting to database" + err);
            process.exit();
        });

    } catch (error) {
        console.log("Error connecting to database");
        console.log(error);
    }

}