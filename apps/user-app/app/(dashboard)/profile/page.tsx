import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { Card } from "@repo/ui/card"
import { Avatar } from "@mui/material"
import prisma from "@repo/db/client"



async function userData(userId:number) {
    const user=await prisma.balance.findFirst({
        where:{
        id:Number(userId)
        }
    })
    return {
        amount:user?.amount
    }
}

export default async function () {
    const session=await getServerSession(authOptions)
  const balance=await userData(session?.user?.id)
    
    return <div>
   <Card  title="Profile" className="w-full max-w-3xl mx-auto">
      <div className="grid gap-2 text-sm m-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-12 w-12 border">
              {/* <Avata alt="User avatar" src="/placeholder-user.jpg" /> */}
            </Avatar>
            <div className="grid gap-0.5">
              <div className="font-semibold">{session.user.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
  @{session.user.name.toLowerCase()}
</div>            </div>
          </div>
          <div className="grid gap-1 text-sm">
            <div className="font-medium">{session.user.email}</div>
          </div>
        </div>
        <div className="grid gap-1">
          <div className="font-medium">Balance</div>
          <div className="text-4xl font-bold">Rs {balance.amount}</div>
        </div>
      </div>
    </Card>
    </div>
}