"use client";

import { useEffect, useState } from "react";
import { useUser, SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Auth({ children }: { children: React.ReactNode }) {
  const { user, isSignedIn } = useUser();
  const [showSignIn, setShowSignIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      setShowSignIn(true);
    } else {
      setShowSignIn(false);
    }
  }, [isSignedIn]);

  if (showSignIn) {
    return (
      <div className="w-screen h-[100dvh] flex justify-center items-center">
        <SignIn />
      </div>
    );
  } else {
    return children;
  }
}
