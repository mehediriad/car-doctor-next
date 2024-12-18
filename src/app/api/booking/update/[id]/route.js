import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export const GET = async(request , {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection("booking")

    try {
        const result = await bookingCollection.findOne({_id: new ObjectId(params.id)})

        return NextRequest.json({message:"booking data get successfull",status:200,data:result})
    } catch (error) {
        return NextRequest.json({message:"something went wrong",status:400,data:error})
    }
}
export const PATCH = async(request , {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection("booking")
    const updateDoc = await request.json()

    try {
        const result = await bookingCollection.updateOne(
            {_id: new ObjectId(params.id)},
            {$set: updateDoc},
            {upsert: true}
        )

        return NextRequest.json({message:"booking data update successfull",status:200,data:result})
    } catch (error) {
        return NextRequest.json({message:"something went wrong",status:400,data:error})
    }
}