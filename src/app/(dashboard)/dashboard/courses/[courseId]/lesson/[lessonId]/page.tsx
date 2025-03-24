import { currentUser } from "@clerk/nextjs/server";
import { LessonCompletion, VideoComponent } from "@/components";
import Image from "next/image";
import { getLessonById, getLessonCompletionStatus } from "@/sanity/lib";
import { PortableText } from "@portabletext/react";

interface props {
  params: Promise<{
    lessonId: string;
  }>;
}

export default async function Lesson({ params }: props) {
  const { lessonId } = await params;
  const lesson = await getLessonById(lessonId);
  const user = await currentUser();

  const completionStatus =
    user?.id && lessonId
      ? await getLessonCompletionStatus(lessonId, user.id)
      : false;

  return (
    <>
      <div className="max-w-4xl mx-auto padding-sp pt-[3rem] pb-[4rem] w-full">
        <div className="mb-4 text-left">
          <h2 className="text-xl font-bold capitalize">{lesson?.title}</h2>
          <p className="text-muted-foreground">{lesson?.description}</p>
        </div>

        {lesson?.videoUrl && <VideoComponent url={lesson.videoUrl} />}

        {lesson?.content && (
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-6">Lesson Notes</h2>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <PortableText value={lesson.content} />
            </div>
          </div>
        )}
      </div>
      <LessonCompletion
        lessonId={lessonId}
        completionStatus={completionStatus}
        clerkId={user!.id}
      />
    </>
  );
}
