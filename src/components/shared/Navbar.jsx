import Image from "next/image";
import { Menu } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Sidebar from "./Sidebar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div>
      <div className="fixed top-0 left-0 flex items-center justify-between h-15 px-4 w-full bg-white lg:bg-transparent lg:top-4 lg:left-5 ">
       
        <div className="w-[130px] h-[33px] lg:w-[180px] lg:h-[48px] relative">
          <Image
            src="/assets/logo.png"
            alt="arrange logo"
            fill
            className="object-contain cursor-pointer"
          />
        </div>

        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent text-black hover:bg-white cursor-pointer opacity-80 hover:opacity-100 block lg:hidden">
                <Menu className="size-[25px]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <Sidebar />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
