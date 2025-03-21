import type { Metadata } from "next";
import {
  ThemeProvider,
  Sidebar,
  ClerkProviderWithTheme,
  Auth,
} from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Lumilearn",
  description: "lumilearn | A learning management system",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProviderWithTheme>
        <Auth>
          <div className="w-screen h-[100dvh] flex justify-between">
            <Sidebar />
            <ScrollArea className="h-[100dvh] flex-1 relative">
              {children}
            </ScrollArea>
          </div>
        </Auth>
        <SanityLive />
      </ClerkProviderWithTheme>
    </ThemeProvider>
  );
}
