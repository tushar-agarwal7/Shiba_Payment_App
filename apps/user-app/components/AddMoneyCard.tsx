"use client"

import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import {TextInput} from "@repo/ui/text-input"
import {Select} from "@repo/ui/select"
import { useState } from "react";


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
    return  <Card title="Add Money">
        <div className="w-full">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={()=>{
                
            }}/>
        </div>
        <div className="flex mt-4 ">
        <div>
         Bank
        </div>
        <Select onSelect={(value)=>{
            setRedirectUrl(SUPPORTED_BANKS.find(x=>x.name===value)?.redirectUrl || " ")
        }} options={SUPPORTED_BANKS.map(x=>({
            key:x.name,
            value:x.name
        }))} />
       </div>

        <div>
            <Button onClick={()=>{
                window.location.href=redirectUrl || "";
            }}>Add Money</Button>
        </div>

    </Card>
}