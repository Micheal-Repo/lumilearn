"use client";
import { useState } from "react";
import { Button } from "@/components";
import { CheckCircle, Loader2, XCircle } from "lucide-react";


export default function LessonCompletion() {
  const isCompleted = false;
  return (
    <div className="absolute bottom-0 left-0 right-0 border-t border-border z-20">
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
          size="lg"
          className="w-full bg-gradient-to-r from-green-600 to-pink-500 text-white"
        >
          {isCompleted ? (
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
