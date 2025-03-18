"use client";
import { useState } from "react";
import {
  ArrowLeft,
  Library,
  ChevronRight,
  PlayCircle,
  X,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*large screen*/}
      <aside className="h-screen w-[25rem] border-r border-border padding-sp text-3xl font-bold max-md:hidden bg-background">
        Sidebar
      </aside>
      
      {/*Mobile screen*/}
      <aside className="h-screen w-[3rem] border-r border-border relative z-20 bg-background md:hidden">
        
       {isOpen && <div className="absolute w-[100vw] bg-black/30 top-0 left-0 h-screen z-10"/>
       } 
       
        <div
          className={cn(
            "absolute top-0 left-0 h-screen z-20 w-[calc(100vw-3rem)] sm:w-[calc(100vw-8rem)] border-r border-border bg-red-200 transition-all duration-300",
            isOpen ? "translate-x-[3rem]" : "-translate-x-[100%]"
          )}
        >
        </div>

        <div className="relative z-30 bg-blue-100 flex justify-center py-4 h-screen text-black">
          <ArrowLeft onClick={() => setIsOpen(!isOpen)} />
        </div>
      </aside>
    </>
  );
}

function SidebarContent() {
  return <div></div>;
}
