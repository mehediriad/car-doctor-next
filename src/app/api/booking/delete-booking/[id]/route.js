import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export const DELETE = async(request , {params}) =>{
    const db = await connectDB()
    const bookingCollection = db.collection("booking");

    try {
        const result = await bookingCollection.deleteOne({_id: new ObjectId(params.id)})
        return NextRequest.json({
            message: "booking deleted successfull",
            status:200,
            data: result
        })
    } catch (error) {
        return NextRequest.json({
            message: "something went wrong",
            status:400,
            data: error
        })
    }
}