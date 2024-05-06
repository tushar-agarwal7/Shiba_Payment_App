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
      CredentialsProvider({
        name:'Credentials',
        credentials:{
          number:{label:"Phone Number",type:"text",placeholder:"8789087209",required:true},
          email:{label:"Email", type:"email", placeholder:"john@gmail.com"},
          name:{label:"Name" , type:"text", placeholder:"name",required:true},
          password:{label:"Password",type:"password"}
        },
        async authorize (credentials:any){
       const hashedPassword=await bcrypt.hash(credentials.password,10)
       const existingUser=await db.user.findFirst({
        where:{
          number:credentials.number
        }
       })
       console.log(existingUser?.name)
       console.log(existingUser?.email)
       console.log(existingUser?.number)
       console.log(existingUser?.password)



       if(existingUser){
        console.log(credentials.password)
        console.log(hashedPassword)
        console.log(existingUser.password)
        const passwordValidation=await bcrypt.compare(credentials.password,existingUser.password)
        if(passwordValidation){
          return {
            id:existingUser.id.toString(),
            name:existingUser.name,
            number:existingUser.number,
            email:existingUser.email
          }
        }
        return null;
       }
       try{
        const user=await db.user.create({
            data:{
                number:credentials.number,
                name: credentials.name,
                password:hashedPassword,
                email:credentials.email
            }
        })

        const res = await db.balance.create({
            data:{
                amount: Math.floor(Math.random() * 10001),
                locked: 0,
                userId: user.id,
            }
        })

        console.log(user);
        console.log("Hello",res);
        return{
            id:user.id.toString(),
            name:user.name ,
            number:user.number,
            email:user.email


        }
    }catch(e){
        console.error(e);
    }
    return  null;
        },
      })
       
      ],
      secret: process.env.JWT_SECRET || "secret",
      callbacks:{
       async session({token,session}:any){
           session.user.id=token.sub
           return session
       }
      }

}