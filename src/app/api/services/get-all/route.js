import connectDB from "@/lib/connectDB"
import { NextRequest } from "next/server";

export const GET = async () => {
    const db = await connectDB()
    const serviceCollection = db.collection("services");
    try {
        const services = await serviceCollection.find().toArray();
        return NextRequest.json(services)
    } catch (error) {
        return NextRequest.json(error)
        
    }
}