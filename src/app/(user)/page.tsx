//components
import { Hero,CourseCard } from "@/components";

export default async function Home() {
  
  interface courseType{
    title:string,
    category:string,
    price:number, 
    desc:string
    instructor:string
  }
  
  
  const courses:courseType[] = [
    {
      title: "Zero to fullstack Hero",
      category: "fullstack development",
      price: 34.8,
      desc: "Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box.",
      instructor: "Ndukwe David",
    },
    {
      title: "Zero to fullstack Hero",
      category: "fullstack development",
      price: 34.8,
      desc: "Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box.",
      instructor: "Ndukwe David",
    },
    {
      title: "Zero to fullstack Hero",
      category: "fullstack development",
      price: 34.8,
      desc: "Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box.",
      instructor: "Ndukwe David",
    },
    {
      title: "Zero to fullstack Hero",
      category: "fullstack development",
      price: 34.8,
      desc: "Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box.",
      instructor: "Ndukwe David",
    },
    {
      title: "Zero to fullstack Hero",
      category: "fullstack development",
      price: 34.8,
      desc: "Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box.",
      instructor: "Ndukwe David",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-background ">
      <Hero />
      <div className="mx-auto container padding-sp">
        <p className="text-muted-foreground font-semibold text-center">
          Featured Courses
        </p>
        <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {courses.map((course,i)=>(
             <CourseCard
               course={course}
               key={i}
             />
          ))}
        </div>
      </div>
    </div>
  );
}
