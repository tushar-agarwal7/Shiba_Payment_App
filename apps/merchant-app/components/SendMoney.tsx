"use client"
import { Avatar, Card, Link } from "@mui/material";
import { Label } from "../@/components/ui/label";
import { Input } from "../@/components/ui/input";
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/text-input";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

function SendMoney() {
    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState("")
    const session = useSession();
    console.log(number)

    useEffect(()=>{
   console.log(amount)
    },[amount])
    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6">
            <div className="max-w-3xl w-full">
                <div className="space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-purple-600">Send Money</h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Securely transfer funds to your friends and family.
                        </p>
                    </div>
                    <Card className="bg-white  rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-4">Send Money</h2>
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                                        setNumber(value)
                                    }} />
                                    <br />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                                    setAmount(value)
                                }} />                </div>
                            <div className="pt-4 flex justify-center">
                                <Button onClick={async () => {
                                    await p2pTransfer(number, Number(amount) * 100)
                                }}>Send Money</Button>              </div>
                        </div>
                    </Card>
                    
                </div>
            </div>
        </main>
    );
};

const TransactionRow = ({ avatar, name, description, amount }:any) => {
    return (
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-3 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
                {avatar}
                <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">{name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{description}</div>
                </div>
            </div>
            <div className={amount.startsWith("-") ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}>
                {amount}
            </div>
        </div>
    );
};

export default SendMoney;


