import React from "react";
import { X } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { EventWrapper } from "./EventWrapper";

export default function EventSection() {
  return (
    <div className=" lg:max-w-[220px] xl:max-w-[350px]">
      <div className="flex justify-between items-start border-b-1 pb-4 border-[#E6E6E6]">
        <div>
          <h1 className="font-[700] text-[24px] md:text-[28px] leading-[100%] text-[#030303]">
            New Event
          </h1>
          <p className="font-[700] text-[12px] md:text-[14px] text-[#68A77C]">
            Candidate First
          </p>
        </div>
        <span className="bg-black text-white rounded-[50%] p-1 cursor-pointer opacity-90 hover:opacity-100  hover:border hover:border-gray-400">
          <X />
        </span>
      </div>

      <div>
        <EventWrapper />
      </div>
    </div>
  );
}
