import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import {GetLessonByIdQueryResult} from "@/sanity/types"


export default async function getLessonById(id: string):Promise<GetLessonByIdQueryResult> {
  const getLessonByIdQuery = defineQuery(
    `*[_type == "lesson" && _id == $id][0]`
  );

  const lesson = await sanityFetch({
    query: getLessonByIdQuery,
    params: {
      id,
    },
  });
  
  return lesson.data
}
