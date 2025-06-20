"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { calculateCourseProgress } from "@/lib/courseProgress";

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
import { Button, ModeToggle, CourseProgress } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

//types
import {
  GetCourseByIdQueryResult,
  GetCompletionsQueryResult,
  Module,
} from "@/sanity/types";

interface SidebarProps {
  course: GetCourseByIdQueryResult;
  completedLessons?: GetCompletionsQueryResult["completedLessons"];
}

export default function Sidebar({
  course,
  completedLessons = [],
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*large screen*/}
      <aside className="h-screen w-[22rem] lg:w-[25rem] border-r border-border max-md:hidden bg-background">
        <SidebarContent
          completedLessons={completedLessons}
          setIsOpen={setIsOpen}
          course={course}
        />
      </aside>

      {/*Mobile screen*/}
      <aside className="h-screen w-[3rem]  relative z-20 bg-background md:hidden">
        {isOpen && (
          <div className="absolute w-[100vw] bg-black/30 top-0 left-0 h-screen z-10" />
        )}

        <div
          className={cn(
            "absolute top-0 left-0 h-screen z-20 w-[calc(100vw-2.5rem)] sm:w-[calc(100vw-10rem)] border-r border-border bg-background border-r border-border transition-all duration-300",
            isOpen ? "translate-x-[2.5rem]" : "-translate-x-[110%]"
          )}
        >
          <SidebarContent
            completedLessons={completedLessons}
            setIsOpen={setIsOpen}
            course={course}
          />
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

function SidebarContent({
  course,
  setIsOpen,
  completedLessons,
}: {
  course: GetCourseByIdQueryResult;
  completedLessons: any;
  setIsOpen: (val: boolean) => void;
}) {
  const [activeModules, setActiveModules] = useState<string[]>([]);

  const params = useParams<{
    courseId: string;
    lessonId: string;
  }>();

  useEffect(() => {
    function findModuleByLessonId() {
      if (!course || !course.modules || !params.lessonId) return null;

      for (const mod of course.modules) {
        if (mod.lessons) {
          const foundLesson = mod.lessons.find(
            (lesson) => lesson._id === params.lessonId
          );
          if (foundLesson) {
            return mod;
          }
        }
      }

      return null;
    }

    const mod = findModuleByLessonId();

    if (mod) {
      if (!activeModules.includes(mod._id)) {
        setActiveModules([...activeModules, mod._id]);
      }
    }
  }, [params]);

  const progress = calculateCourseProgress(
    course?.modules as unknown as Module[],
    completedLessons
  );

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
      <div className="space-y-4">
        <h1 className="font-semibold text-2xl">{course?.title}</h1>
        <CourseProgress
          progress={progress}
          variant="success"
          label="Course Progress"
        />
      </div>

      {/*modules*/}
      <Accordion
        type="multiple"
        className="w-full mt-12"
        value={activeModules}
        onValueChange={setActiveModules}
      >
        {course?.modules?.map((mod, i) => (
          <AccordionItem key={mod._id} value={mod._id}>
            <AccordionTrigger
              className={`hover:no-underline py-3 px-3 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <div className="flex items-center gap-6">
                <span className="rounded-full bg-muted text-muted-foreground w-8 h-8 flex justify-center items-center font-medium flex-shrink-0">
                  0{i + 1}
                </span>
                <div className="flex flex-col text-left justify-start items-start">
                  <p className="font-bold capitalize">{mod.title}</p>
                  <p className="text-sm font-light text-muted-foreground">
                    {mod?.lessons?.length}
                    {""} lessons
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col bg-muted/40">
                {mod?.lessons?.map((lesson, i) => (
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={`/dashboard/courses/${params.courseId}/lesson/${lesson._id}`}
                    key={lesson._id}
                    className={`w-full py-3 pl-8 pr-3 hover:bg-muted flex border-l-2 items-center transition-all duration-300 gap-4 ${
                      params?.lessonId === lesson._id
                        ? "border-green-500 bg-muted"
                        : "border-transparent"
                    }`}
                  >
                    <span className="text-muted-foreground">0{i + 1}</span>
                    <PlayCircle className="text-muted-foreground ml-2 flex-shrink-0" />
                    <p className="capitalize">{lesson?.title}</p>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollArea>
  );
}
