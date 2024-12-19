import { MongoClient, ServerApiVersion } from "mongodb";

let db;
const connectDB = async () => {
    if (db) return db
    try {
        const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@express-mongo-curd.khcti.mongodb.net/?retryWrites=true&w=majority&appName=express-mongo-curd`;
        console.log(uri);
        
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        db = await client.db("carDoctorNext")
        return db
    } catch (error) {
        console.log(error);
        
    }
};

export default connectDB;