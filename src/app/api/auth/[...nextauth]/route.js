import connectDB from "@/lib/connectDB"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {},
                password: {}
              },
              async authorize(credentials, req) {
                const {email,password} = credentials
                if(!email) return null

                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({email:email})

                if(!currentUser) return null

                const comparePassword = bcrypt.compareSync(password, currentUser.password);

                if(!comparePassword) return null
                return currentUser
              }
        })
    ],
    callbacks: {},
    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }