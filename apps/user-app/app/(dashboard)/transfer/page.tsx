import { getServerSession } from "next-auth";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransaction } from "../../../components/OnRampTransaction";
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

async function  getOnRampTrnsaction() {
    const session=await getServerSession(authOptions)
    const history=await prisma.onRampTransaction.findMany({
        where:{
            userId:Number(session?.user?.id)
        }
    })
    return history.map(his=>({
        amount:his.amount,
        status:his.status,
        provider:his.provider,
        time:his.startTime,

    }))
}
export default async function (){
    const balance=await getBalance();
    const transactions=await getOnRampTrnsaction();
    return  <div className="w-screen">
<h1 className="text-4xl italic  mt-10">Transfer</h1>
    <div className=" my-40 mx-20 flex ">
        <div className="h-40 w-1/2">
        <AddMoney/>
        </div>
        <div className="w-1/2 ">
            <BalanceCard amount={balance.amount} locked={balance.locked}/>
            <OnRampTransaction transactions={transactions} />
        </div>
    </div>
    </div>
}