import connectDB from "@/lib/connectDB"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret:"super_secret",
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
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          })
    ],
    callbacks: {
        async signIn({ user, account ,profile,email}) {
          
            if (account.provider === "google") {
              try {
                const db = await connectDB()
                const usersCollection = db.collection('users');
                const exist = await usersCollection.findOne({email:user.email})
                if(!exist){
                    await usersCollection.insertOne(user)
                    return user
                }else{
                    return user
                }
              } catch (error) {
                console.log(error);
                
              }
            }
            return user 
          },
         
          
    },
    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }