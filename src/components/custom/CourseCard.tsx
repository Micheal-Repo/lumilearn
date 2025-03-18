import Image from "next/image";
import Link from "next/link";

//components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//icon
import { BookOpen } from "lucide-react";

interface courseType {
  title: string;
  category: string;
  price: number;
  desc: string;
  instructor: string;
}

interface props {
  course: courseType;
}

export default function CourseCard({ course }: props) {
  return (
    <Link href="/courses/12233" className="cursor-pointer">
      <Card className="w-full group hover:-translate-y-2 transition-all duration-300 shadow-md overflow-hidden">
        {/*image*/}
        <div className="h-52 md:h-56 relative w-full overflow-hidden">
          <Image
            fill={true}
            alt="course image"
            src="/image.jpeg"
            className="object-cover object-center group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />

          <div className="absolute inset-0 py-6 px-4 flex justify-between items-end">
            <div className="rounded-3xl bg-black/40 backdrop-blur-md p-2 border text-white">
              <p className="text-sm capitalize">
                {course.category || "Uncategorized"}
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-2  text-white">
              <p className="text-sm capitalize">${course.price || 0}</p>
            </div>
          </div>
        </div>

        {/*content*/}
        <CardContent className="flex flex-col gap-4 pt-4">
          <h2 className="text-xl font-bold capitalize">{course.title}</h2>
          <p className="text-muted-foreground">{course.desc}</p>
          <div className="flex justify-between items-center">
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
              <p className="text-muted-foreground">{course.instructor}</p>
            </div>

            <BookOpen className="h-4 w-4 text-muted-foreground" size={25}/>
          </div>
        </CardContent>
        {/*<CardFooter className="flex justify-between"></CardFooter>*/}
      </Card>
    </Link>
  );
}
