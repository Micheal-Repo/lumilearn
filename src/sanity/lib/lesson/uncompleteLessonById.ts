import { adminClient } from "@/sanity/lib";
import { sanityFetch } from "../live";
import groq from "groq";

interface UncompleteLessonParams {
  lessonId: string;
  clerkId: string;
}

export default async function uncompleteLessonById({
  lessonId,
  clerkId,
}: UncompleteLessonParams) {
  // Get Sanity student ID from Clerk ID
  const student = await sanityFetch({
    query: groq`*[_type == "student" && clerkId == $clerkId][0]._id`,
    params: { clerkId },
  });

  if (!student.data) {
    throw new Error("Student not found");
  }

  // Find and delete the lesson completion record
  await adminClient.delete({
    query: `*[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId][0]`,
    params: { studentId: student.data, lessonId },
  });
}
