"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function ActiveLink({
  targetPath,
  children,
}: {
  targetPath: string;
  children: ReactNode;
}) {
  const currentPath = usePathname();
  const isActiveLink = currentPath === targetPath;

  return (
    <div className="w-full"><Link
      href={targetPath}
      className={`flex gap-3 mx-5  py-2 my-2 text-nowrap   hover:bg-Background ${isActiveLink &&
        "font-bold   scale-y-110  transition-all "} `}
    >
      {children}
    </Link><div className={`min-h-[2px] w-0 transition-all duration-500   mx-2   bg-main ${isActiveLink &&
        " w-9/10"} `}></div></div> 
  );
}

export default ActiveLink;
