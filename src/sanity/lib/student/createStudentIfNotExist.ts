import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { adminClient } from "@/sanity/lib";

interface CreateStudentProps {
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
}

export default async function createStudentIfNotExist({
  clerkId,
  email,
  firstName,
  lastName,
  imageUrl,
}:CreateStudentProps) {
  const existingStudentQuery = defineQuery(
    `*[_type == "student" && clerkId == $clerkId][0]`
  );

  const student = await sanityFetch({
    query: existingStudentQuery,
    params: { clerkId },
  });

  if (student?.data) {
    return student.data;
  }

  const newStudent = await adminClient.create({
    _type: "student",
    clerkId,
    firstName,
    lastName,
    imageUrl,
  });

  return newStudent;
}
