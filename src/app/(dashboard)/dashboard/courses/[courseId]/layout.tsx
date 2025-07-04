import type { Metadata } from "next";
import {
  ThemeProvider,
  Sidebar,
  ClerkProviderWithTheme,
  Auth,
} from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { redirect } from "next/navigation";
import { SanityLive } from "@/sanity/lib/live";
import { getCourseById,getCourseProgress } from "@/sanity/lib";
import { currentUser } from "@clerk/nextjs/server";





export const metadata: Metadata = {
  title: "Lumilearn",
  description: "lumilearn | A learning management system",
};

interface props {
  children: React.ReactNode;
  params: Promise<{
    courseId: string;
  }>;
}

export default async function UserLayout({ children, params }: props) {
  const user = await currentUser();
  if (!user?.id) {
    return redirect("/");
  }
  const { courseId } = await params;
  const [course, progress] = await Promise.all([
    getCourseById(courseId),
    getCourseProgress(user.id, courseId),
  ]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProviderWithTheme>
        {!course ? (
          <div className="w-screen h-screen flex justify-center items-center text-3xl font-bold">
            Course Not Found
          </div>
        ) : (
          <div className="w-screen h-[100dvh] flex justify-between">
            <Sidebar completedLessons={progress.completedLessons} course={course} />
            <ScrollArea className="h-[100dvh] flex-1 relative">
              {children}
            </ScrollArea>
          </div>
        )}

        <SanityLive />
      </ClerkProviderWithTheme>
    </ThemeProvider>
  );
}
