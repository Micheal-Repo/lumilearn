import { sanityFetch } from "../live";
import { defineQuery } from "groq";
import {GetCourseBySlugQueryResult} from "@/sanity/types"


export default async function getCourseBySlug(slug: string):Promise<GetCourseBySlugQueryResult>{
  const getCourseBySlugQuery =
    defineQuery(`*[_type == "course" && slug.current == $slug][0]{
     ...,
     "image":image.asset->url,
     "category": category->{...},
     "instructor": instructor->{...},
     "modules": modules[]->{
       ...,
       "lessons": lessons[]->{...}
     },
    }`);

  const course = await sanityFetch({
    query: getCourseBySlugQuery,
    params: { slug },
  });
  
  return course.data 
}
