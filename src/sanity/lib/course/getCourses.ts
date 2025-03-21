import { sanityFetch } from "../live";
import { defineQuery } from "groq";
import {GetCoursesQueryResult} from "@/sanity/types"


export default async function getCourse():Promise<GetCoursesQueryResult>{
  const getCoursesQuery = defineQuery(`
   *[_type == "course"]{
    ...,
    "image":image.asset->url,
    "slug":slug.current,
    "category": category->{...},
    "instructor": instructor->{...}
   }
  `);
  
  const courses = await sanityFetch({
    query:getCoursesQuery
  })
  
  return courses.data
}
