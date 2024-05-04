
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session=await getServerSession(authOptions)
  console.log(session?.user.name);
  if(!session?.user){
    redirect('/api/auth/signin')
  }

  return (
    <div>
      {session.user.name}
     <img src={session.user.image} alt="" />
    </div>
  )
  
}
