import { Card } from "@repo/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { Onp2pTransaction } from "../../../components/Onp2pTransaction";

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


export default async function P2pHistory() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if (!userId) {
        // Handle case where user ID is not available
        return <div>No user ID available</div>;
    }

    const transactions = await getP2pHistory(Number(userId));
    console.log(transactions);

    return (
        <div>
            <div className="pt-4">
                <Onp2pTransaction Transactions={transactions} />
            </div>
        </div>
    );
}
