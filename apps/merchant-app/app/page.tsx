
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import HomePage from "../components/Homepage";

export default async function Page() {
  const session=await getServerSession(authOptions)
  console.log(session?.user.name);
  if(session?.user){
    redirect('/dashboard')
  }
 
  return (
    <HomePage/>

  )
  

  
}
