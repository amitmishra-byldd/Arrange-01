import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div>
      <Navbar />

      <div className="mt-10 px-5 py-10 lg:pl-[330px]">
        <div>{children}</div>
      </div>
    </div>
  );
}
