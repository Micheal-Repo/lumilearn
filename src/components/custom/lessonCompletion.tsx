"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { completeLessonAction, uncompleteLessonAction } from "@/actions";
import { useRouter } from "next/navigation";

export default function LessonCompletion({
  lessonId,
  completionStatus,
  clerkId
}: {
  lessonId: string;
  completionStatus: boolean;
  clerkId:string 
}) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsCompleted(completionStatus);
    setIsLoading(false);
  }, []);

  const handleToggle = async () => {
    if(!clerkId && !lessonId) return 
    try {
      setIsPending(true);
      if (isCompleted) {
        await uncompleteLessonAction(lessonId, clerkId);
      } else {
        await completeLessonAction(lessonId, clerkId);
      }

      router.refresh();
    } catch (error) {
      console.error("Error toggling lesson completion:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background">
      <div className="max-w-4xl padding-sp flex flex-col md:flex-row gap-4 items-center md:justify-between justify-center py-3 mx-auto">
        {/*left*/}
        <div className="flex flex-col md:text-left text-center">
          <p className="text-sm font-medium">
            {isCompleted
              ? "Lesson completed!"
              : "Ready to complete this lesson?"}
          </p>
          <p className="text-sm text-muted-foreground">
            {isCompleted
              ? "You can mark it as incomplete if you need to revisit it."
              : "Mark it as complete when you're done."}
          </p>
        </div>

        {/*right*/}
        <Button
          onClick={handleToggle}
          disabled={isLoading}
          size="lg"
          className="bg-gradient-to-r from-green-600 to-pink-500 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              please wait...
            </>
          ) : isPending ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              {isCompleted ? "Uncompleting..." : "Completing..."}
            </>
          ) : isCompleted ? (
            <>
              <XCircle className="h-4 w-4 mr-2" />
              Mark as Not Complete
            </>
          ) : (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark as Complete
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
