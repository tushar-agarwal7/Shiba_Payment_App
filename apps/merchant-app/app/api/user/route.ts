import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { NextRequest, NextResponse } from "next/server"
import db from "@repo/db/client"
import prisma from "@repo/db/client"


export const  GET=async()=>{
    const session=await getServerSession(authOptions)
    if(session.user){
        return NextResponse.json({
            user:session.user
        })
    }
    return NextResponse.json({
        message:"You are not logged in"
    },{
        status:403
    })
}

// export async function POST(req: NextRequest) {
//     const body = await req.json();
//    const user=await prisma.user.create({
//     data:{
//         name:body.name,
//         number:body.phone,
//         email:body.email,
//         password:body.password

//     }
//    })
   
//    console.log(user.id)
   
//     return NextResponse.json({
//         message:"Signed Up"
//     })
// }