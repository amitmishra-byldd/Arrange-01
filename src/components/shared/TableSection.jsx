"use client";
import React, { useState } from "react";

const days = [
  { days: "Sunday" },
  { days: "Monday" },
  { days: "Tuesday" },
  { days: "Thursday" },
  { days: "Friday" },
  { days: "Satarday" },
];

export default function TableSection() {
  return (
    <div>
      {days.map((items, index) => (
        <div className="mb-4">
          <div className="flex gap-1 font-[500] text-[14px] md:text-[16px] pb-2 2xl">
            <input type="checkbox" />
            <label htmlFor="">{items.days}</label>
          </div>
          <div className="flex items-center justify-start gap-4 xl:gap-8 2xl:gap-15">
            <div className="border-0 outline-none focus:outline-none focus:ring-0">
              <select
                className=" text-[14px] outline-0 border border-[#E0E0E0] px-2 xl:px-4 py-2 rounded-[5px] font-[500]"
                name=""
                id="time"
              >
                <option for="time" value="time">
                  9:00
                </option>
                <option for="time" value="time">
                  10:00
                </option>
                <option for="time" value="time">
                  11:00
                </option>
                <option for="time" value="time">
                  12:00
                </option>
              </select>
            </div>
            <span className="text-[16px]">To</span>
            <div>
              <select
                name=""
                id="time"
                className="text-[14px] outline-0 border border-[#E0E0E0] px-2 xl:px-4 py-2 rounded-[5px] font-[500]"
              >
                <option for="time" value="time">
                  9:00
                </option>
                <option for="time" value="time">
                  10:00
                </option>
                <option for="time" value="time">
                  11:00
                </option>
                <option for="time" value="time">
                  12:00
                </option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
