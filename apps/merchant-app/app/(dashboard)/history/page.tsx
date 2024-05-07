import Button from '@mui/material/Button';
import Onp2pHistory from '../../../components/Onp2pHistory';
import prisma from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { Onp2pHistory2 } from '../../../components/SendMoney';


async function getP2pHistory(userId:number) {
  const sentTransactions = await prisma.p2pTransfer.findMany({
      where: {
          fromUserId: userId
      }
  });

  const receivedTransactions = await prisma.p2pTransfer.findMany({
      where: {
          toUserId: userId
      }
  });

  const formattedSentTransactions = sentTransactions.map(trans => ({
      type: 'sent',
      amount: trans.amount,
      startTime: trans.startTime,
      fromUserId: trans.fromUserId,
      toUserId: trans.toUserId
  }));

  const formattedReceivedTransactions = receivedTransactions.map(trans => ({
      type: 'received',
      amount: trans.amount,
      startTime: trans.startTime,
      fromUserId: trans.fromUserId,
      toUserId: trans.toUserId
  }));

  return [...formattedSentTransactions, ...formattedReceivedTransactions];
}

export default async function  () {
  const session=await getServerSession(authOptions)
  const userId=session?.user?.id

  if(!userId){
    return {
      message:"No user available"
    }
  }
  const transactions=await getP2pHistory(Number(userId))
  // console.log(transactions)
  return <div>
    <Onp2pHistory transactions={transactions}/>
  </div>

}