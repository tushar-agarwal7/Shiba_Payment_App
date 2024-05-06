import SidebarItems from "../../components/SidebarItems";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <aside className="bg-gray-800 w-64">
      <div className="flex flex-col h-full justify-between">
        <div className="mt-6 mb-10">
        
    <SidebarItems icon={<HomeIcon/>} title={'Home'} href={'/dashboard'}/>
    <SidebarItems icon={<TransactionIcon/>} title={'P2P'} href={'/p2p'}/>
    <SidebarItems icon={<HistoryIcon/>} title={'History'} href={'/history'}/>
    <SidebarItems icon={<ProfileIcon/>} title={'Profile'} href={'/profile'}/>

      </div>
      </div>
      </aside>

 <main className="flex-1 overflow-y-auto bg-gray-100">
        <div className="p-10">{children}</div>
      </main>   </div>
  );
}

function HomeIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

  }

  function HistoryIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

  }

  function TransactionIcon(){
   return  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>

  }

  function ProfileIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
  
  }