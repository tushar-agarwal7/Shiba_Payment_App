import { Button } from "./button";

interface AppbarProps{
  user?:{
    name?: string | null;
  },
  onSignin:any,
  onSignout:any
}

export const Appbar = ({
  user,
  onSignin,
  onSignout
}:AppbarProps) => {
  return (
    <div className="flex justify-between border-b px-4 h-28 bg-black text-white">
      <div className="text-lg flex flex-col justify-center">
        <img src="shibalogo.png" alt=""  height={"30"} width={"80"}/>
      </div>
      <div className="flex flex-col">
        <Button onClick={user?onSignout:onSignin}>{user?"Logout":"Login"}</Button>
      </div>
     
    </div>
  );
};
