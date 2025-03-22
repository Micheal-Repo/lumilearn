import { defineQuery } from "groq";
import { sanityFetch } from "../live";

export default async function getCourseById(courseId: string) {
  const getCourseByIdQuery =
    defineQuery(`*[_type == "course" && _id == $id][0] {
      ...,
      "image":image.asset->url,
      "category": category->{...}, 
      "instructor": instructor->{...},
      "modules": modules[]-> {  
        ..., 
        "lessons": lessons[]-> {...} 
      }
    }`);

  const course = await sanityFetch({
    query: getCourseByIdQuery,
    params: { id:courseId },
  });

  return course.data;
}
