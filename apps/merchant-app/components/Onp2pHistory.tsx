import { Card } from "@repo/ui/card";

function Onp2pHistory({transactions}:any) {
  
    console.log(transactions)
    if (!transactions.length) {
        return (
            <Card title="Recent Transactions" className="bg-gray-100">
                <div className="text-center text-gray-600 pb-8 pt-8">
                    No recent transactions
                </div>
            </Card>
        );
    }
    return (
        
        <Card title="Recent Transactions" className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-y-auto max-h-96">
                <div className="divide-y divide-gray-200">
                    {transactions.map((t, index) => (
                        <div key={index} className="p-4 flex justify-between items-center">
                            <div>
                                <div className="text-sm text-gray-600">{t.type === 'sent' ? 'Sent to User ID:' : 'Received from User ID:'} {t.toUserId}</div>
                                <div className="text-xs text-gray-500">{new Date(t.startTime).toLocaleDateString()}</div>
                            </div>
                            <div className="flex items-center">
                                <div className={`text-lg font-semibold ${t.type === 'sent' ? 'text-red-600' : 'text-green-600'}`}>{t.type === 'sent' ? '- Rs' : '+ Rs'} {t.amount / 100}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>    )
}

export default Onp2pHistory