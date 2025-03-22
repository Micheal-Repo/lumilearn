"use client";
import Link from "next/link";
import { Button } from "@/components";
import { useUser } from "@clerk/nextjs";
import { useTransition } from "react";
import { CheckCircle } from "lucide-react";

export default function EnrollButton({
  courseId,
  isEnrolled,
}: {
  courseId: string;
  isEnrolled: boolean;
}) {
  const { user, isLoaded } = useUser();
  const [isPending, startTransition] = useTransition();

   function handleEnroll(courseId: string){
     
   }


  // Show loading state while checking user is loading
  if (!isLoaded) {
    return (
      <div className="w-full h-12 rounded-lg bg-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (isEnrolled) {
    return (
      <Link href={`/dashboard/courses/${courseId}`}>
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-green-600 to-pink-500 text-white"
        >
          Access Course
        </Button>
      </Link>
    );
  }

  return (
    <button
      className={`w-full rounded-lg px-6 py-3 font-medium transition-all duration-300 ease-in-out relative h-12
        ${
          isPending || !user?.id
            ? "bg-gray-100 text-gray-400 cursor-not-allowed hover:scale-100"
            : "bg-white text-black hover:scale-105 hover:shadow-lg hover:shadow-black/10"
        }
      `}
      disabled={!user?.id || isPending}
      onClick={() => handleEnroll(courseId)}
    >
      {!user?.id ? (
        <span className={`${isPending ? "opacity-0" : "opacity-100"}`}>
          Sign in to Enroll
        </span>
      ) : (
        <span className={`${isPending ? "opacity-0" : "opacity-100"}`}>
          Enroll Now
        </span>
      )}
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
}
