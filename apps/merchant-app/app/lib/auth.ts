import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import db from "@repo/db/client"


export const authOptions={
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID ||  "" ,
        clientSecret: process.env.GITHUB_SECRET || ""
      }),
      // CredentialsProvider({
      //   name:'Credentials',
      //   credentials:{
      //     phone:{label:"Phone Number",type:"text",placeholder:"8789087209"},
      //     name:{label:"Name" , type:"text", placeholder:"name",required:true},
      //     password:{label:"Password",type:"password"}
      //   },
      //   async authorize (credentials:any){
      //  const hashedPassword=await bcrypt.hash(credentials.password,10)
      //  const existingUser=await db.user.findFirst({
      //   where:{
      //     number:credentials.phone
      //   }
      //  })
      //  if(existingUser){
        
      //  }

      //   },
      // })
       
      ],
      secret: process.env.JWT_SECRET || "secret",
      callbacks:{
       async session({token,session}:any){
           session.user.id=token.sub
           return session
       }
      }

}