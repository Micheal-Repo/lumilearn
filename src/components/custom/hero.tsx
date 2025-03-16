import { BookMarkedIcon, BookOpen, Search } from "lucide-react";
import { Button } from "@/components";

export default function Hero() {
  return (
    <div className="w-screen min-h-[45vh] relative pt-8 border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />

      <div className="container relative mx-auto h-full flex flex-col padding-sp justify-center">
        <div className="max-w-3xl space-y-4 md:space-y-6 ">
          <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Expand Your Knowledge with Our Courses
          </h1>
          <p className="text-xl text-muted-foreground ">
            Discover a world of learning with our expertly crafted courses.
            Learn from industry professionals and take your skills to the next
            level.
          </p>

          <div className="mt-4">
            <Button size="lg" className="flex items-center gap-2 md:hidden">
              <BookMarkedIcon size={25} />
              <p className="">My Courses</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
