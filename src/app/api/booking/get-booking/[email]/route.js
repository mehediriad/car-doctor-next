import connectDB from "@/lib/connectDB"
import { NextRequest } from "next/server";

export const GET = async(request , {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection("booking")

    try {
        const result = await bookingCollection.find({email: params.email}).toArray()

        return NextRequest.json({message:"booking data get successfull",status:200,data:result})
    } catch (error) {
        return NextRequest.json({message:"something went wrong",status:400,data:error})
    }
}