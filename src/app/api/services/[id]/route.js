import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    // const {id} = await params
    // console.log(id);
    
    
    const db = await connectDB()
    const serviceCollection = db.collection("services");
    try {
        const service = await serviceCollection.findOne({_id: new ObjectId(params.id)});
        return NextResponse.json(service)
    } catch (error) {
        return NextResponse.json(error)
        
    }
}
