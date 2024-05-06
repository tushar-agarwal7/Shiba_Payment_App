import { getServerSession } from "next-auth";
import Profile from "../../../components/Profile";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function  getBalance() {
  const session=await getServerSession(authOptions)
  const balance=await prisma.balance.findFirst({
      where:{
          userId:Number(session?.user?.id)
      }
  })
  return {
      amount:balance?.amount || 0,
      locked:balance?.locked || 0,
      
  }
}

export default async function(){
  const balance=await getBalance()
  const session=await getServerSession(authOptions)

    return (
     <Profile amount={balance.amount} session={session}/>
    )
}