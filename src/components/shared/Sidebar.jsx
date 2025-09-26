import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  LayoutDashboard,
  Users,
  UsersRound,
  TriangleRight,
  MailCheck,
  Podcast,
  DatabaseBackup,
  UserStar,
  MessagesSquare,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const sidebarMenu = [
  { icon: <LayoutDashboard className="size-[16px]" />, label: "Dashboard" },
  { icon: <Users className="size-[16px]" />, label: "My Client" },
  { icon: <UsersRound className="size-[16px]" />, label: "My Candidates" },
  { icon: <TriangleRight className="size-[16px]" />, label: "Arrange" },
  { icon: <MailCheck className="size-[16px]" />, label: "Email Templates" },
  { icon: <Podcast className="size-[16px]" />, label: "Your Subscription" },
  { icon: <Users className="size-[16px]" />, label: "Users" },
  {
    icon: <DatabaseBackup className="size-[16px]" />,
    label: "Arrange with me",
  },
  { icon: <UserStar className="size-[16px]" />, label: "My Account" },
  { icon: <MessagesSquare className="size-[16px]" />, label: "Interviews" },
];

export default function Sidebar() {
  return (
    <div className="lg:fixed md:px-6 lg:top-20 lg:left-0 lg:w-[318px] flex flex-col justify-between lg:bg-white lg:h-[calc(100vh-50px)]">
      <div className="flex-1 overflow-y-auto">
        <ul>
          {sidebarMenu.map((items, index) => (
            <li
              key={index}
              className="text-[12px] md:text-[14px] lg:text-[16px] flex items-center gap-3 py-5 px-3 md:px-7 rounded-md cursor-pointer text-[#898989] hover:bg-[#9BBF82] hover:text-white"
            >
              <span>{items.icon}</span>
              <span>{items.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-4">
        <div className="flex items-center gap-2 p-2 border-1 border-[#F2F2F2] rounded-lg">
          <div className="relative h-12 w-12">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Image
              src="/assets/user.png"
              alt="Josh Collins"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div>
            <p className="font-semibold">Josh Collins</p>
            <p className="text-sm text-[#898989]">josh.collins@example.com</p>
          </div>
        </div>

        <div className="">
          <Button className="my-5 hover:rounded-0 py-5 px-7 cursor-pointer bg-white text-[#898989] hover:bg-[#9BBF82] hover:text-white w-full">
            <LogOut className="size-[16px]" /> Logout{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
