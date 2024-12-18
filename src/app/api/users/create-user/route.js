import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {

    const newUser = await request.json();
    console.log(newUser);
    

    try {
        const db = await connectDB();
        const usersCollection = db.collection("users")
        const exist = await usersCollection.findOne({email:newUser.email})

        if(exist){
            return NextResponse.json({
                status:304,
                message:"user already exist"
            })
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);

        const result = await usersCollection.insertOne({...newUser,password:hashedPassword})

        return NextResponse.json({
            data: result,
            status:200,
            message:"user has been created"
        })
    } catch (error) {
        return NextResponse.json({
            status:500,
            message:"something went wrong",
            error
        })
    }

}