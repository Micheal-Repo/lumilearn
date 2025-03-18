import { LessonCompletion } from "@/components";
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto padding-sp pt-[3rem] pb-[4rem]">
        <h2 className="text-xl font-bold capitalize mb-4">Zero to full stack Hero</h2>
        <div className="w-full h-[16rem] md:h-[23rem] rounded-lg overflow-hidden mb-6 relative">
           <Image
             src="/image.jpeg"
             alt=""
             fill={true}
             className="object-cover object-center"
           />
        </div>
        <h2 className="font-bold capitalize">Lecture note</h2>
      </div>
      <LessonCompletion />
    </>
  );
}
