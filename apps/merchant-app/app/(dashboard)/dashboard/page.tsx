import { Dashboard } from "../../../components/Dashboard";
import { getServerSession } from "next-auth";
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
      locked:balance?.locked || 0
  }
}

export default async function  () {
const balance=await getBalance()
    return <div>
<Dashboard amount={balance.amount}/>
    
 </div>

}