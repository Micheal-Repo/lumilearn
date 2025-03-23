import { redirect } from "next/navigation";
import { getCourseById } from "@/sanity/lib";

interface props {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function Course({ params }: props) {
  const { courseId } = await params;

  const course = await getCourseById(courseId);

  const lessonId = course?.modules?.[0]?.lessons?.[0]?._id;

  if (lessonId) {
    return redirect(`/courses/${courseId}/${lessonId}`);
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Welcome to {course?.title}</h2>
        <p className="text-muted-foreground">
          This course has no content yet. Please check back later.
        </p>
      </div>
    </div>
  );
}
