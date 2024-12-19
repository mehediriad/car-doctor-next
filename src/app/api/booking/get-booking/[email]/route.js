import connectDB from "@/lib/connectDB"
import {  NextResponse } from "next/server";

export const GET = async(request , {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection("booking")

    try {
        const result = await bookingCollection.find({email: params.email}).toArray()

        return NextResponse.json({message:"booking data get successfull",status:200,data:result})
    } catch (error) {
        return NextResponse.json({message:"something went wrong",status:400,data:error})
    }
}