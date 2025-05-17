import React from "react";
import { logout } from "@/services/auth/action";
import ModelContainer from "./ModelContainer";
import { Button } from "@/components/ui/Button";
import { CircleX } from "lucide-react";

function LogoutModel({closeLogoutModel,isModelOpen}:{closeLogoutModel:()=>void,isModelOpen:boolean}) {
  return (
    <ModelContainer isModelOpen ={isModelOpen} >
      <div className={`min-w-fit p-15 flex flex-col gap-20 bg-white  relative border-3 border-main`}>
        <p className="text-3xl text-secondary ">Are you sure you want to logout?</p>
          <button className="text-main absolute top-2 right-2 cursor-pointer" onClick={closeLogoutModel} ><CircleX/></button>
        <div className="flex justify-center">
          <Button   onClick={logout} >confirm</Button>
        </div>
      </div>
    </ModelContainer>
  );
}

export default LogoutModel;
