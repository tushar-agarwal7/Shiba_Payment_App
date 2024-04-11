import db from "@repo/db/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"


export const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                phone:{label:"Phone Number" , type:"text", placeholder:"98123****",required:true},
                password:{label:"Password",type:"password",required:true}
            },
            async authorize(credentials:any) {
                const hashedPassword=await bcrypt.hash(credentials.password,10);
                const existingUser=await db.user.findFirst({
                    where:{
                        number:credentials.phone
                    }
                })
                if(existingUser){
                    console.log(credentials.password)
                    console.log(hashedPassword)
                    console.log(existingUser.password)
                    const passwordValidation=await bcrypt.compare(credentials.password,existingUser.password)
                    if(passwordValidation){
                        return {
                            id:existingUser.id.toString(),
                            name:existingUser.name,
                            number:existingUser.number
                        }
                    }
                    return null;
                }
                try{
                    const user=await db.user.create({
                        data:{
                            number:credentials.phone,
                            password:hashedPassword
                        }
                    })
                    console.log(user);
                    return{
                        id:user.id.toString(),
                        name:user.name,
                        email:user.number

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