"use client";

import { useEffect, useState } from "react";
import { useUser, SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Auth({ children }: { children: React.ReactNode }) {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  //console.log('user',user)

  if (!isSignedIn) {
    router.replace("/");
  }

  return children;
}
