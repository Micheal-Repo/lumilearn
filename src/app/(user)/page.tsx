//components
import { Hero, CourseCard } from "@/components";

//lib
import { getCourses } from "@/sanity/lib";

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="w-screen min-h-screen bg-background ">
      <Hero />
      <div className="mx-auto container padding-sp">
        <p className="text-muted-foreground font-semibold text-center">
          Featured Courses
        </p>
        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-14">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              href={`/courses/${course.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
