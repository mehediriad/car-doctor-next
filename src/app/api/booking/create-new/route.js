import connectDB from "@/lib/connectDB"
import { NextRequest } from "next/server"

export const POST = async (request) =>{
    const db = await connectDB()
    const bookingCollection = db.collection("booking")
    const bookingData = await request.json()

    try {
        const result = await bookingCollection.insertOne(bookingData)
        return NextRequest.json({message:"Service Booked Successcully",status:200,data:result})
    } catch (error) {
        return NextRequest.json({message:"Something went wrong",status:400,data:error})
    }
}