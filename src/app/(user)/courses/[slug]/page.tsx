import Image from "next/image"
import { ArrowLeft, BookOpen } from "lucide-react";
import {Button} from "@/components"

export default function Course(){
  
    const course = {
      title: "Zero to fullstack Hero",
      category: "fullstack development",
      price: 34.8,
      desc: "Welcome to Gboard clipboard, any text you copy will be saved here.Tap on a clip to paste it in the text box.",
      instructor: "Ndukwe David",
    }
  
  return (
      <div className="w-screen">
        
        {/*Top*/}
        <div className="h-[50vh] w-full relative">
          
          <Image
           src="/image"
           alt=""
           fill={true}
           className="object-cover object-center"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"/>
            
          {/*content*/}
          <div className="relative container mx-auto flex flex-col md:flex-row md:items-end md:justify-between justify-end max-md:gap-6 text-white">
            
            {/*left*/}
            <div className="flex flex-col gap-4">
               <div className="flex gap-2 items-center text-white/80 text-sm mb-10">
                 <ArrowLeft/>
                 <p>Back to Courses</p>
               </div>
               
               <div className="rounded-3xl  p-2 bg-white/10 backdrop-blur-md capitalize text-white/80 text-sm">
                  fullStack web development
               </div>
               
               <h2 className="text-4xl md:text-5xl font-bold capitalize">
                 {course.title}
               </h2>
               
               <p className="text-lg max-w-2xl text-white/80 ">
                 {course.desc}
               </p>
            </div>
            
            {/*right*/}
            <div className="bg-white/10 backdrop-blur-md rounded-lg w-full md:max-w-md flex flex-col gap-4 p-6">
               <p className="text-lg">${course.price}</p>
               <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-pink-500 text-white">Access Course</Button>
            </div>
            
          </div>
          
        </div>
        
        
      </div>
    )
}