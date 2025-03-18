"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

//icons
import {
  ArrowLeft,
  Library,
  ChevronRight,
  PlayCircle,
  X,
  Check,
} from "lucide-react";

//components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button, ModeToggle } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*large screen*/}
      <aside className="h-screen w-[22rem] lg:w-[25rem] border-r border-border max-md:hidden bg-background">
        <SidebarContent />
      </aside>

      {/*Mobile screen*/}
      <aside className="h-screen w-[3rem] border-r border-border relative z-20 bg-background md:hidden">
        {isOpen && (
          <div className="absolute w-[100vw] bg-black/30 top-0 left-0 h-screen z-10" />
        )}

        <div
          className={cn(
            "absolute top-0 left-0 h-screen z-20 w-[calc(100vw-2.5rem)] sm:w-[calc(100vw-10rem)] border-r border-border bg-background border-r border-border transition-all duration-300",
            isOpen ? "translate-x-[2.5rem]" : "-translate-x-[110%]"
          )}
        >
          <SidebarContent />
        </div>

        <div className="relative z-30 bg-background flex justify-center py-6 h-screen w-full border-r border-border">
          <div className="flex flex-col gap-4">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/">
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Library className="h-5 w-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Course Library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                  >
                    <ChevronRight
                      className={cn(
                        "h-5 w-5 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Toggle Sidebar</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarContent() {
  const [progress, setProgress] = useState(50);
  const [activeModules, setActiveModules] = useState<string[]>([]);

  const course = {
    title: "Zero to fullstack Hero",
    category: "fullstack development",
    price: 34.8,
    desc: "Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box.",
    instructor: "Ndukwe David",
    modules: [
      {
        title: "full stack app",
        lessons: [
          {
            title: "E-commerce web app",
          },
          {
            title: "E-commerce web app",
          },
          {
            title: "E-commerce web app",
          },
        ],
      },
      {
        title: "full stack app",
        lessons: [
          {
            title: "E-commerce web app",
          },
          {
            title: "E-commerce web app",
          },
          {
            title: "E-commerce web app",
          },
        ],
      },
    ],
  };

  return (
    <ScrollArea className="w-full h-screen px-4 sm:px-6 ">
      <div className="w-full flex items-center justify-between py-4 mb-6">
        <span className="flex items-center gap-2">
          <ArrowLeft size={24} /> 
          <span>My Courses</span>
        </span>
        <ModeToggle />
      </div>

      {/*title and progress*/}
      <div>
        <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
        <div>
          <div className="w-full flex justify-center items-center">
            <p className="text-sm text-muted-foreground">course progress</p>
            <p className="text-sm text-muted-foreground">{progress}%</p>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </div>

      {/*modules*/}
      <Accordion
        type="multiple"
        className="w-full space-y-4"
        value={activeModules}
        onValueChange={setActiveModules}
      >
        {course.modules.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className={`hover:no-underline py-3 px-3 ${i === 0 ? "border-t" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-medium">0{i+1}</span>
                <div className="flex flex-col gap-1">
                  <p className="font-medium capitalize">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.lessons.length}{""} lessons</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col bg-muted/40">
                {item.lessons.map((lesson,i)=>(
                 <div key={i} className={`w-full py-3 pl-8 pr-3 hover:bg-muted/80 flex items-center gap-4 ${i === 0 ? "border-l-green-500 bg-muted/80" : ""}`}>
                    <span className="text-muted-foreground">0{i+1}</span>
                    <PlayCircle className="text-muted-foreground ml-2"/>
                    <p className="capitalize">{lesson.title}</p>
                 </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollArea>
  );
}
