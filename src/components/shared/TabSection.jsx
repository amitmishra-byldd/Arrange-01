import React from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function TabSection() {
  return (
    <div className="mt-10 flex justify-between gap-5 flex-wrap pb-3 border-b border-[#E6E6E6]">
      
      <div className="border border-[#9BBF82] py-1 px-0.5 rounded-[50px] h-[34px] lg:h-[54px] flex items-center justify-between gap-2">
        
        <span className="text-black/50 text-[12px] font-[500] px-[8px] py-[6px] lg:px-[14px] lg:py-[10px] hover:bg-[#9BBF82] rounded-[50px] hover:text-white cursor-pointer md:text-[12px] lg:text-[16px] text-nowrap ">
          Arrange with me
        </span>

        <span className="text-black/50 text-[12px]  font-[500] px-[8px] py-[6px] lg:px-[14px] lg:py-[10px] hover:bg-[#9BBF82] rounded-[50px] hover:text-white cursor-pointer md:text-[12px] lg:text-[16px] text-nowrap">
          Arrange with us
        </span>
      </div>

      {/* Add new Event section */}

      <div>
        <Popover>
          <PopoverTrigger className="bg-white text-[#68A77C] text-[12px]  font-[500] px-[8px] py-[6px] lg:px-[14px] lg:py-[10px] border border-[#68A77C] hover:bg-[#9BBF82] h-[34px] lg:h-[54px] rounded-[50px] hover:text-white cursor-pointer md:text-[12px] lg:text-[16px] text-nowrap">
            +Add New Event
          </PopoverTrigger>
          <PopoverContent>
            <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
              Arrange with me{" "}
            </h2>
            <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
              Arrange with us
            </h2>
            <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
              Arrange with admin
            </h2>
            <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
              Arrange with super admin
            </h2>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
