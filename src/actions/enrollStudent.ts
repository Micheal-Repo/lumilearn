"use server"
import {
  adminClient,
  getCourseById,
  createStudentIfNotExist,
  createEnrollment,
} from "@/sanity/lib";
import { clerkClient } from "@clerk/nextjs/server";

export default async function enrollStudent(courseId: string, userId: string) {
  try {
    if (!courseId || !userId) {
      throw new Error("invalid information");
    }

    const course = await getCourseById(courseId);

    if (!course) {
      throw new Error("course not found");
    }

    const client = await clerkClient();
    const clerkUser = await client.users.getUser(userId);

    const { imageUrl, emailAddresses, username, id } = clerkUser;

    const email = emailAddresses[0].emailAddress;

    //createStudentIfNotExist
    const user = await createStudentIfNotExist({
      clerkId: userId,
      email: email || "",
      firstName: username || "",
      lastName: "",
      imageUrl: imageUrl || "",
    });

    if (!user) {
      throw new Error("User not found");
    }

    await createEnrollment({
      studentId: user._id,
      courseId: course._id,
      amount: Number(course.price),
    });

    return { url: `/courses/${course.slug?.current}` };
    
  } catch (err) {
    console.log("error enrolling students ", err);
    throw new Error("failed to enroll students ");
  }
}
