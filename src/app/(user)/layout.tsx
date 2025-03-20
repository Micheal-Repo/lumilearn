import type { Metadata } from "next";
import { ThemeProvider, Header, ClerkProviderWithTheme } from "@/components";

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
        <Header />
        {children}
      </ClerkProviderWithTheme>
    </ThemeProvider>
  );
}
