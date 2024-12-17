import connectDB from "@/lib/connectDB"

export const POST = async (request) =>{
    const db = await connectDB()
    const bookingCollection = db.collection("booking")
    const bookingData = await request.json()

    try {
        const result = await bookingCollection.insertOne(bookingData)
        return Response.json({message:"Service Booked Successcully",status:200,data:result})
    } catch (error) {
        return Response.json({message:"Something went wrong",status:400,data:error})
    }
}