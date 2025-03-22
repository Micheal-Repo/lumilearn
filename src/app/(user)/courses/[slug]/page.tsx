import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { auth } from "@clerk/nextjs/server";

//components
import { Button,EnrollButton } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//sanity
import { getCourseBySlug,isEnrolledInCourse } from "@/sanity/lib";


interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Course({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  
  const {userId} = await auth()
  
  const isEnrolled = userId && course?._id ? await isEnrolledInCourse(userId,course?._id) : false

  if (!course) {
    return (
      <div className="w-screen h-screen flex just items-center">
        <p className="capitalize text-2xl font-bold">Course Not found</p>
      </div>
    );
  }

  return (
    <div className="w-screen pb-14">
      {/*Top*/}
      <div className="min-h-[50vh] w-full relative max-md:pt-[3rem] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={course.image || "/image.jpeg"}
            alt={course.title || "course"}
            fill={true}
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

        {/*content*/}
        <div className="relative container mx-auto flex flex-col md:flex-row md:justify-between gap-6 text-white padding-sp pb-8 md:items-end">
          {/*left*/}

          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex gap-2 items-center text-white/80 text-sm mb-6 md:mb-8 cursor-pointer"
            >
              <ArrowLeft />
              <p>Back to Courses</p>
            </Link>

            <div>
              <span className="rounded-3xl p-2 bg-white/10 backdrop-blur-md capitalize text-white/80 text-sm">
                {course?.category?.name || "Uncategorized"}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold capitalize">
              {course?.title}
            </h2>

            <p className="text-lg max-w-2xl text-white/80 ">
              {course?.description}
            </p>
          </div>

          {/*right*/}
          <div className="bg-white/10 backdrop-blur-md rounded-lg w-full md:max-w-[300px] flex flex-col gap-4 p-6 ">
            <p className="text-lg font-medium">${course?.price || 0}</p>

            <EnrollButton isEnrolled={isEnrolled} courseId={course._id}/>
          </div>
        </div>
      </div>

      {/*bottom*/}
      <div className="mt-14 container mx-auto padding-sp grid lg:grid-cols-3 grid-cols-1 padding-sp lg:gap-12  items-start">
        {/*module*/}
        <div className="w-full lg:col-span-2 mb-8 border border-border bg-card rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Course Content</h2>

          <div className="space-y-4">
            {course.modules?.map((module, i) => (
              <div key={module._id}>
                <div className="p-4 rounded-t-lg border border-border">
                  <h3 className="text-muted-foreground font-bold font-medium capitalize ">
                    module-{i + 1}: {module.title}
                  </h3>
                </div>
                {module.lessons?.map((lesson, i) => (
                  <div
                    key={lesson._id}
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
        <div className="w-full border rounded-lg p-6 border-border space-y-4 lg:h-[200px]">
          <p className="font-bold">Instructor</p>

          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={
                  course?.instructor?.photo
                    ? urlFor(course.instructor.photo).url()
                    : ""
                }
              />
              <AvatarFallback className="relative">
                <Image
                  src="/avatar.png"
                  alt={course?.instructor?.name || "instructor"}
                  fill={true}
                  className="object-cover object-center"
                />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-muted-foreground font-medium">
                {course?.instructor?.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {course?.instructor?.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
