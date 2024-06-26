"use client"

import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import {TextInput} from "@repo/ui/text-input"
import {Select} from "@repo/ui/select"
import { useState } from "react";
import { createOnRampTransactions } from "../app/lib/actions/createOnRampTransactions"


const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];
''


export const AddMoney=()=>{
    const [redirectUrl,setRedirectUrl]=useState(SUPPORTED_BANKS[0]?.redirectUrl)
    const [provider,setProvider]=useState(SUPPORTED_BANKS[0]?.name || "")
    const [value,setValue]=useState(0);
    return  <Card title="Add Money">
        <div className="w-full">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={(val)=>{
                setValue(Number(val))
            }}/>
        </div>
        <div className="mt-4 ">
        
        <Select onSelect={(value)=>{
            setRedirectUrl(SUPPORTED_BANKS.find(x=>x.name===value)?.redirectUrl || " ")
            setProvider(SUPPORTED_BANKS.find(x=>x.name===value)?.name || "")
        }} options={SUPPORTED_BANKS.map(x=>({
            key:x.name,
            value:x.name
        }))} />
       </div>

        <div>
            <Button onClick={async()=>{
          await createOnRampTransactions(provider,value*100);
                window.location.href=redirectUrl || "";
                alert("Money Added")

            }}
            
            >Add Money</Button>
        </div>

    </Card>
}