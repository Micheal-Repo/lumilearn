import { BookMarkedIcon, BookOpen, Search } from "lucide-react";
import { Button } from "@/components";

export default function Hero() {
  return (
    <div className="w-screen h-[45vh] bg-gradient-to-b from-background/60 via-background/30 to-background">
      <div className="container mx-auto h-full flex flex-col gap-4 md:gap-6 padding-sp justify-center">
        <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          Expand Your Knowledge with Our Courses
        </h1>
        <p className="text-xl text-muted-foreground font-bold">
          Discover a world of learning with our expertly crafted courses. Learn
          from industry professionals and take your skills to the next level.
        </p>
        <Button className="flex items-center gap-2 md:hidden">
          <BookMarkedIcon />
          <p className="">My Courses</p>
        </Button>
      </div>
    </div>
  );
}
