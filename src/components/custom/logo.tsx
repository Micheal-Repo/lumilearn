import { BookMarkedIcon, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Logo({
  className,
  icon
}:{
  className?: string
  icon?:number 
}){
  return (
     <Link href="/" className={cn("flex items-center gap-2 cursor-pointer",className)}>
       <BookOpen className=""/>
       <p className="font-bold">Lumilearn</p>
     </Link>
    )
}