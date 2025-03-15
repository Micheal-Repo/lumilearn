//components
import { Logo, ModeToggle, SearchInput, Button } from "@/components";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

//icons
import { BookMarkedIcon, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky w-screen top-0 bg-background/80 backdrop-blur-md border-b border-border z-50 ">
      <div className="container mx-auto flex items-center justify-between py-4 padding-sp gap-4">
        {/*left*/}
        <div className="flex items-center gap-2 sm:gap-4">
          <Logo />
          <SearchInput />
        </div>

        {/*right*/}
        <div className="flex items-center sm:gap-4 gap-2">
          <Button variant="outline" size="icon" className="md:hidden">
            <BookMarkedIcon />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 max-md:hidden"
          >
            <BookMarkedIcon />
            <p className="">My Courses</p>
          </Button>
          
          <ModeToggle />

          <SignedIn>
            <UserButton />
          </SignedIn>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
