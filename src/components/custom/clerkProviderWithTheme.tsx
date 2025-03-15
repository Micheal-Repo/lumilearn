"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { useTheme } from "next-themes";

export function ClerkProviderWithTheme({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const clerkTheme:any = theme === "dark" ? dark : null
 
  return (
    <ClerkProvider
      appearance={{
         baseTheme: clerkTheme,
      }}
    >
      {children}
    </ClerkProvider>
  );
}