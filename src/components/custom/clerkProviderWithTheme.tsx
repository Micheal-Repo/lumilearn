"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ClerkProviderWithTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  
  useEffect(()=>{
    alert(theme)
    console.log("theme",theme)
  },[theme])


  if (theme !== "dark") {
    return (
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        {children}
      </ClerkProvider>
    );
  } else {
    return <ClerkProvider>{children}</ClerkProvider>;
  }
}
