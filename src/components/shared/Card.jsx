import React from "react";
import { EllipsisVertical, Clock, Copy } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className="p-5 rounded-3xl shadow-[0_4px_4px_0_#00000040]">
      <div className="">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[16px] lg:text-[18px] font-[600] text-[#9BBF82]">
              {props.cardName}
            </h1>
            <p className="text-[12px] lg:text-[14px] text-black/50 font-[500]">
              30min, Zoom call
            </p>
          </div>
          <div>
            <Popover>
              <PopoverTrigger>
                {/* seeting icon */}
                <span className="cursor-pointer">
                  <EllipsisVertical />
                </span>
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
                  Arrange with me{" "}
                </h2>
                <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
                  settings
                </h2>
                <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
                  billing
                </h2>
                <h2 className="py-2 my-1 px-2 rounded-[4px] hover:font-[500] text-[12px] md:text-[14px] lg:text-[16px] hover:bg-[#c3c1c1]">
                  Account
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className=" mt-4 flex text-black/50  font-[500] items-center gap-1 text-[14px]">
          <span>
            <Clock className="w-[14px] h-[14px]" />
          </span>
          <span>12:00 PM</span>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Link
          href="#"
          className="mt-8 flex gap-1 items-center text-[#68A77C] font-[700] text-[14px] lg:text-[16px]"
        >
          <Copy className="w-[16px] h-[16px] lg:w-[18px]" />
          <span className="lg:text-[16px] hover:border-b-2 hover:border-[#68A77C]">Copy Link</span>
        </Link>
      </div>
    </div>
  );
}
