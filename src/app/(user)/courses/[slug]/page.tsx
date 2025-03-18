import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";

//components
import { Button } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Course() {
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
    <div className="w-screen pb-14">
      {/*Top*/}
      <div className="min-h-[50vh] w-full relative">
        <div className="absolute inset-0">
          <Image
            src="/image.jpeg"
            alt=""
            fill={true}
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />

        {/*content*/}
        <div className="absolute inset-0 container mx-auto flex flex-col md:flex-row md:items-end md:justify-between justify-end gap-6 text-white padding-sp max-md:mt-[3rem] pb-8 ">
          {/*left*/}
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center text-white/80 text-sm mb-8 cursor-pointer">
              <ArrowLeft />
              <p>Back to Courses</p>
            </div>

            <div>
              <span className="rounded-3xl  p-2 bg-white/10 backdrop-blur-md capitalize text-white/80 text-sm">
                fullStack web development
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold capitalize">
              {course.title}
            </h2>

            <p className="text-lg max-w-2xl text-white/80 ">{course.desc}</p>
          </div>

          {/*right*/}
          <div className="bg-white/10 backdrop-blur-md rounded-lg w-full md:max-w-[300px] flex flex-col gap-4 p-6">
            <p className="text-lg font-medium">${course.price}</p>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-green-600 to-pink-500 text-white"
            >
              Access Course
            </Button>
          </div>
        </div>
      </div>

      {/*bottom*/}
      <div className="mt-14 container mx-auto padding-sp grid lg:grid-cols-3 grid-cols-1 padding-sp">
        {/*module*/}
        <div className="w-full lg:col-span-2 mb-8 border border-border bg-card rounded-lg p-4">
          <h2 className="text-2xl font-bold">Course Content</h2>

          <div className="space-y-4">
            {course.modules.map((item, i) => (
              <div key={i}>
                <div className="p-4 rounded-t-lg border border-border">
                  <h3 className="text-muted-foreground font-bold font-medium capitalize mb-4">
                    module-{i + 1}:{" "}{item.title}
                  </h3>
                </div>
                {item.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="border-b  hover:bg-muted/50 p-4 transition-all duration-300 flex items-center border-l border-r border-border gap-4"
                  >
                    <span className="rounded-full bg-primary/10 text-primary w-8 h-8 flex justify-center items-center font-medium flex-shrink-0">
                      {i + 1}
                    </span>

                    <BookOpen className="h-4 w-4 text-muted-foreground" />

                    <p className="text-muted-foreground font-medium">
                      {lesson.title}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/*instructor*/}
        <div className="w-full border rounded-lg p-6 border-border space-y-4">
          <p className="font-bold">Instructor</p>

          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="relative">
                <Image
                  src="/avatar.png"
                  alt={course.instructor}
                  fill={true}
                  className="object-cover object-center"
                />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-muted-foreground font-medium">
                {course.instructor}
              </p>
              <p className="text-xs text-muted-foreground">Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
