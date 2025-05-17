import Link from "next/link";
import {
  ChartColumnIncreasing,
  LogOut,
  BriefcaseBusiness,
  ShoppingBag,
} from "lucide-react";
import ActiveLink from "../ui/ActiveLink";
function AsideBar({
  isVisible,
  toggleLogoutModel,
}: {
  isVisible: boolean;
  toggleLogoutModel: () => void;
}) {
  return (
    <div
      className={`${
        isVisible
          ? "visible translate-x-0 opacity-100"
          : "invisible translate-x-[-100%] opacity-0"
      } 
           transition-all duration-400 ease-out
           w-full min-h-screen grid grid-cols-1 
           border-e-4 border-Input-Border 
          text-Text text-center  shadow-Aside `}
    >
      <div className="w-full ">
          <Link href={"/"}>
            <p className="text-4xl font-bold mt-4 mb-8 cursor-pointer">
              Hestia
            </p>
          </Link>

        <div className="flex flex-col  text-start    space-y-10  text-lg ">
          <ActiveLink targetPath={"/"}>
            <ChartColumnIncreasing /> Performance
          </ActiveLink>
          <ActiveLink targetPath={"/projects"}>
            <BriefcaseBusiness />
            Show Projects
          </ActiveLink>
          <ActiveLink targetPath={"/orders"}>
            <ShoppingBag />
            Show Titles
          </ActiveLink>
          <button
            title="show logout model"
            className=" flex  gap-3 mx-5  py-2 my-2  justify-start  items-center text-start text-lg cursor-pointer  text-nowrap   hover:bg-Background "
            onClick={toggleLogoutModel}
          >
            <LogOut />
            logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AsideBar;
