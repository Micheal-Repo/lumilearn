import {getProjects} from "@/sanity/sanity-utils"

export default async function Home(){
  const projects = await getProjects()
  
  console.log("projects",projects)
  
  return (
      <div className="w-screen h-screen flex justify-center items-center bg-white text-black font-bold text-[2rem] flex-col">
        {projects.map((item,i)=>(
          <h1 key={i}>{i+1}{" "}{item.name}</h1>
        ))}
      </div>
    )
}