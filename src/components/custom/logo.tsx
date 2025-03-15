import { BookMarkedIcon, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils"

export default function Logo({
  className
}:{
  className?: string 
}){
  return (
     <div className={cn("flex items-center gap-2 ",className)}>
       <BookOpen size={24}/>
       <p className="font-bold">Lumilearn</p>
     </div>
    )
}