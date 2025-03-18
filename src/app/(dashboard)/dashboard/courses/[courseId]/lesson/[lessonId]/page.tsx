import { LessonCompletion } from "@/components";
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto padding-sp text-4xl pt-[3rem] pb-[4rem]">
        <h2 className="text-3xl font-bold capitalize mb-4">Zero to full stack Hero</h2>
        <div className="w-full h-[16rem] md:h-[23rem] rounded-lg overflow-hidden mb-6">
           <Image
             src="/image.jpeg"
             alt=""
             fill={true}
             className="object-cover object-center"
           />
        </div>
        <h1 className="font-bold capitalize">Lecture note</h1>
      </div>
      <LessonCompletion />
    </>
  );
}
