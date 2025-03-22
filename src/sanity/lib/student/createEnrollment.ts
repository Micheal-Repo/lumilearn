import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { adminClient } from "@/sanity/lib";

interface CreateEnrollmentParams {
  studentId: string;
  courseId: string;
  amount: number;
}

export default async function createEnrollment({
  studentId,
  courseId,
  amount,
}: CreateEnrollmentParams) {
  
  const newEnrollment = await adminClient.create({
    _type: "enrollment",
    student: {
      _type: "reference",
      _ref: studentId,
    },
    course: {
      _type: "reference",
      _ref: courseId,
    },
    amount,
    enrolledAt: new Date().toISOString(),
  });
  
  
  return newEnrollment
}
