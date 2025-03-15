import { BookMarkedIcon, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils"

export default function Logo({
  className,
  icon
}:{
  className?: string
  icon?:number 
}){
  return (
     <div className={cn("flex items-center gap-2 ",className)}>
       <BookOpen/>
       <p className="font-bold">Lumilearn</p>
     </div>
    )
}