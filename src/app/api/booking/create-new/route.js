import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async (request) =>{
    const db = await connectDB()
    const bookingCollection = db.collection("booking")
    const bookingData = await request.json()

    try {
        const result = await bookingCollection.insertOne(bookingData)
        return NextResponse.json({message:"Service Booked Successcully",status:200,data:result})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",status:400,data:error})
    }
}