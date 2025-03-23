import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { getStudentByClerkId } from "@/sanity/lib";

export default async function getLessonCompletionStatus(
  lessonId: string,
  clerkId: string
) {
  const student = await getStudentByClerkId(clerkId);

  if (!student?.data?._id) {
    return false;
  }

  const completionStatusQuery = defineQuery(
    `*[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId][0]`
  );

  const result = await sanityFetch({
    query: completionStatusQuery,
    params: {
      studentId: student.data._id,
      lessonId,
    },
  });

  return result.data ? true : false;
}
