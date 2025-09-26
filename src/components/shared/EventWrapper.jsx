"use client";

import * as React from "react";
import { ChevronUp, ChevronDown, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import TabSection from "./TabSection";
import TableSection from "./TableSection";

const modeContent = [
  { img: "/assets/meet.svg", label: "Google" },
  { img: "/assets/zoom.svg", label: "Zoom" },
  { img: "/assets/team.svg", label: "Team" },
  { img: "/assets/phone.svg", label: "Phone" },
];

export function EventWrapper() {


  
  const [duration, setDuration] = React.useState(false);
  const [mode, setMode] = React.useState(false);
  const [availability, setAvailability] = React.useState(true);
  const [host, setHost] = React.useState(false);

  return (
    <>
      {/* Duration Section */}
      <div className="pb-4 border-b border-[#E6E6E6]">
        <Collapsible
          open={duration}
          onOpenChange={setDuration}
          className="flex w-full flex-col gap-2 mt-5"
        >
          <div className="flex items-center justify-between gap-4 ">
            <h4 className="font-[700] text-[14px] md:text-[16px] text-black/50">
              Duration
            </h4>
            <CollapsibleTrigger asChild>
              <Button
                onClick={() => {
                  setDuration(!duration);
                }}
                variant="ghost"
                size="icon"
                className="size-8 flex items-center justify-center cursor-pointer"
              >
                {duration ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
            <span>
              <Clock className="font-[700] w-[20px] h-[20px]" />
            </span>
            <span>10 Mins</span>
          </div>

          <CollapsibleContent className="flex flex-col gap-2">
            <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
              <span>
                <Clock className="font-[700] w-[20px] h-[20px]" />
              </span>
              <span>30 Mins</span>
            </div>
            <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
              <span>
                <Clock className="font-[700] w-[20px] h-[20px]" />
              </span>
              <span>1 Houre</span>
            </div>
            <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
              <span>
                <Clock className="font-[700] w-[20px] h-[20px]" />
              </span>
              <span>3 Houre</span>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Mode of Communication */}
      <div className="pb-4 border-b border-[#E6E6E6]">
        <Collapsible
          open={mode}
          onOpenChange={setMode}
          className="flex w-full flex-col gap-2 mt-5"
        >
          <div className="flex items-center justify-between gap-4 ">
            <h4 className="font-[700] text-[14px] md:text-[16px] text-black/50">
              Mode of Communication
            </h4>
            <CollapsibleTrigger asChild>
              <Button
                onClick={() => {
                  setMode(!mode);
                }}
                variant="ghost"
                size="icon"
                className="size-8 flex items-center justify-center cursor-pointer"
              >
                {mode ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="flex gap-3 flex-wrap">
            {modeContent.map((items, index) => (
              <div
                key={index}
                className="flex flex-col p-5 items-center border-[0.8px] border-[#EBEBEB] hover:font-[600] cursor-pointer"
              >
                <Image
                  src={items.img}
                  width={10}
                  height={8.5}
                  alt={items.label}
                />
                <span className="text-[12px]">{items.label}</span>
              </div>
            ))}
          </div>
        </Collapsible>
      </div>

      {/* Availability Section */}
      <div className="pb-4 border-b border-[#E6E6E6]">
        <Collapsible
          open={availability}
          onOpenChange={setAvailability}
          className="flex w-full flex-col gap-2 mt-5"
        >
          <div className="flex items-center justify-between gap-4 ">
            <h4 className="font-[700] text-[14px] md:text-[16px] text-black/50">
              Availability
            </h4>
            <CollapsibleTrigger asChild>
              <Button
                onClick={() => {
                  setAvailability(!availability);
                }}
                variant="ghost"
                size="icon"
                className="size-8 flex items-center justify-center cursor-pointer"
              >
                {availability ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="mt-1 flex font-[500] items-center gap-1 text-[16px] cursor-pointer hover:text-black/80">
            {!availability && "Weekdays, 9am to 5pm"}
          </div>

          <CollapsibleContent className="flex flex-col gap-2">
            <TableSection />
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      {/* Host Section */}
      <div className="pb-4 border-b border-[#E6E6E6]">
        <Collapsible
          open={host}
          onOpenChange={setHost}
          className="flex w-full flex-col gap-2 mt-5"
        >
          <div className="flex items-center justify-between gap-4 ">
            <h4 className="font-[700] text-[14px] md:text-[16px] text-black/50">
              Host
            </h4>
            <CollapsibleTrigger asChild>
              <Button
                onClick={() => {
                  setHost(!host);
                }}
                variant="ghost"
                size="icon"
                className="size-8 flex items-center justify-center cursor-pointer"
              >
                {host ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
            <span className="text-[10px] px-2 py-1 bg-green-200 rounded-[100%]">
              P
            </span>
            <span>Piyush</span>
          </div>

          <CollapsibleContent className="flex flex-col gap-2">
            <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
              <span className="text-[10px] px-2 py-1 bg-green-200 rounded-[100%]">
                R
              </span>
              <span>Raghav</span>
            </div>
            <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
              <span className="text-[10px] px-2 py-1 bg-green-200 rounded-[100%]">
                A
              </span>
              <span>Amit</span>
            </div>
            <div className="mt-2 flex text-black/50  font-[500] items-center gap-1 text-[14px] cursor-pointer hover:text-black/80">
              <span className="text-[10px] px-2 py-1 bg-green-200 rounded-[100%]">
                A
              </span>
              <span>Ayush</span>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
}
