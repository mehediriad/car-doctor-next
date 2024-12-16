import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {

    const newUser = await request.json();
    console.log(newUser);
    

    try {
        const db = await connectDB();
        const usersCollection = db.collection("users")
        const exist = await usersCollection.findOne({email:newUser.email})

        if(exist){
            return Response.json({
                status:304,
                message:"user already exist"
            })
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);

        const result = await usersCollection.insertOne({...newUser,password:hashedPassword})

        return Response.json({
            data: result,
            status:200,
            message:"user has been created"
        })
    } catch (error) {
        return Response.json({
            status:500,
            message:"something went wrong",
            error
        })
    }

}