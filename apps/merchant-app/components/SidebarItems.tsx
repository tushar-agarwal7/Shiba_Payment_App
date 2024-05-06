"use client"

import { usePathname, useRouter } from "next/navigation";


interface SidebarProps{
  href:string,
  title:string,
  icon:React.ReactNode
}

export default function SidebarItem({ href, title, icon }: SidebarProps) {
  const router=useRouter();
  const pathname=usePathname()
  const selected=pathname===href
  return (
      <div className={`flex ${selected ? "text-[#3c28ed]" : "text-slate-500"} cursor-pointer p-2 pl-2`} onClick={()=>{
          router.push(href)
      }}>
          
              <div className="pr-2 text-white font-semibold text-lg mr-4"> 
                  {icon}
              </div>
              <div className="text-white font-semibold text-lg mr-4">
                  {title}
              </div>
          

      </div>
  )
}