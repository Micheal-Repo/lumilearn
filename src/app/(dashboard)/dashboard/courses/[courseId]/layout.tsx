import type { Metadata } from "next";
import { ThemeProvider, Sidebar, ClerkProviderWithTheme } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <ClerkProviderWithTheme>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="w-screen h-[100dvh] flex justify-between">
          <Sidebar />
          <ScrollArea className="h-[100dvh] flex-1 relative">
           {children}
          </ScrollArea>
        </div>
      </ThemeProvider>
    </ClerkProviderWithTheme>
  );
}
