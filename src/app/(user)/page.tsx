
//components
import {Hero} from "@/components"




export default async function Home(){

  
  return (
      <div className="w-screen min-h-screen bg-background ">
        <Hero/>
        <div className="mx-auto container padding-sp">
          <p className="text-muted-foreground font-semibold text-center">Featured Courses</p>
          
        </div>
      </div>
    )
}