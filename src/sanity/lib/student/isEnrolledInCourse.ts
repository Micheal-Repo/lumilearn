import { defineQuery } from "groq";
import { sanityFetch } from "../live";

export default async function isEnrolledInCourse(clerkId: string, courseId: string):Promise<boolean>{
  try {
    const studentQuery = defineQuery(
      `*[_type == "student" && clerkId == $clerkId][0]._id`
    );

    const studentId = await sanityFetch({
      query: studentQuery,
      params: { clerkId },
    });

    if (!studentId) {
      console.log("students not found");
      return false;
    }

    const enrollmentQuery = defineQuery(
      `*[_type == "enrollment" && student._ref == $studentId && course._ref == $courseId][0]`
    );

    const enrollment = await sanityFetch({
      query: enrollmentQuery,
      params: {
        studentId: studentId.data,
        courseId,
      },
    });

    return !!enrollment.data;
  } catch (err) {
    console.error("Error checking enrollment status:", err);
    return false;
  }
}
