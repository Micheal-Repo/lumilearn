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
  const [isDark,setIsDark] = useState(null)
  
  useEffect(()=>{
    alert(theme)
    if(theme === "dark"){
      setIsDark(true)
    }else{
      setIsDark(false)
    }
  },[theme])


  if (theme === "dark" || isDark) {
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
