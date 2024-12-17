import connectDB from "@/lib/connectDB"

export const GET = async () =>{
    const db = await connectDB()
    const serviceCollection = db.collection("services");
    const services = await serviceCollection.find().toArray();
    return Response.json(services)
}